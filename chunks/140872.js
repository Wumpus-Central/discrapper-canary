(n.d(t, { A: () => nn }), n(321073));
var i,
    l = n(477900),
    s = n(582128),
    a = n(435558),
    r = n.n(a),
    o = n(855986),
    c = n(534514),
    d = n(40474),
    u = n(282956),
    m = n(522978),
    g = n(235986),
    h = n(143582),
    x = n(607940),
    A = n(808728),
    p = n(576705),
    b = n(188567),
    f = n(975571),
    j = n(732159),
    N = n(192308),
    C = n(406810),
    v = n(950305),
    E = n(993077),
    I = n(834730),
    T = n(404778),
    y = n(430392),
    S = n(39619),
    k = n(821609),
    O = n(157559),
    w = n(298702),
    L = n(266990),
    R = n(727419),
    M = n(633018),
    _ = n(503698),
    P = n.n(_),
    G = n(178686);
function W(e) {
    let { children: t, icon: n, title: i } = e;
    return (0, l.jsxs)("header", {
        className: G.wx,
        children: [
            (0, l.jsxs)("div", {
                className: G.UU,
                children: [
                    s.cloneElement(n, { className: P()(n.props.className, G.Kk), height: 24, width: 24 }),
                    (0, l.jsx)(c.D, { variant: "heading-sm/semibold", className: G.DD, children: i }),
                ],
            }),
            t,
        ],
    });
}
var D = n(542580),
    B = n(803378),
    U = n(825453),
    H = n(683438),
    V = n(485845),
    z = n(155718),
    K = n(633334);
function F(e) {
    return { id: e.id, names: [e.displayName] };
}
var Y = n(261958),
    q = n(939249),
    Q = n(885574),
    Z = n(442433),
    J = n(200662),
    X = n(792996),
    $ = n(634968);
function ee(e) {
    let { applicationIcon: t, applicationName: i, canNavigate: a, command: r, guildId: o } = e,
        c = s.useMemo(() => 0 !== Object.keys(r.permissions ?? {}).length, [r.permissions]),
        d = s.useCallback(() => {
            null != r &&
                a() &&
                (0, N.mM)(async () => {
                    let { default: e } = await n.e(615946).then(n.bind(n, 326993));
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
                    let { default: e } = await n.e(715687).then(n.bind(n, 646938));
                    return (t) => (0, l.jsx)(e, { ...t, id: r.id, label: X.intl.string(X.t.oJ1Muw) });
                });
            },
            [r],
        ),
        m = r.type === z.kc.CHAT ? M.SlashBoxIcon : Y.PaperIcon,
        g = (0, J.p6)(r.type, r.displayName);
    return (0, l.jsxs)(q.D, {
        onClick: d,
        className: $.AS,
        onContextMenu: u,
        children: [
            (0, l.jsxs)("div", {
                className: $.Cv,
                children: [
                    (0, l.jsx)(m, { className: $.Kk, size: "md", color: "currentColor" }),
                    (0, l.jsx)(I.E, { variant: "body-md/normal", children: g }),
                ],
            }),
            (0, l.jsx)("div", {
                className: $.II,
                children: c
                    ? (0, l.jsxs)("div", {
                          className: $.Bs,
                          children: [
                              (0, l.jsx)(I.E, { variant: "body-md/normal", children: X.intl.string(X.t.jH4B9O) }),
                              (0, l.jsx)(Q.CircleInformationIcon, {
                                  size: "sm",
                                  color: "currentColor",
                                  className: $.I8,
                              }),
                          ],
                      })
                    : null,
            }),
        ],
    });
}
var et = n(636547),
    en = n(747414);
function ei(e) {
    let { applicationIcon: t, applicationName: n, canNavigate: i, guildId: a } = e,
        {
            results: r,
            query: c,
            setQuery: d,
            unfilteredCount: u,
            isLoaded: m,
        } = (function () {
            let e = (0, o.bG)([B.A], () => null != B.A.getCommands()),
                t = (0, o.cf)([B.A], () => Object.values(B.A.getCommands() ?? {})),
                [n, i] = s.useState(""),
                l = s.useMemo(
                    () =>
                        t.filter(
                            (e) =>
                                (null == e.integration_types || e.integration_types.includes(V.b.GUILD_INSTALL)) &&
                                (null == e.contexts || e.contexts?.includes(z.OL.GUILD)),
                        ),
                    [t],
                ),
                a = s.useMemo(
                    () =>
                        [...l].sort((e, t) => {
                            let n = z.kc.CHAT + 1,
                                i = (t.type > n ? n : t.type) - (e.type > n ? n : e.type);
                            return 0 !== i ? i : e.untranslatedName.localeCompare(t.untranslatedName);
                        }),
                    [l],
                ),
                r = s.useMemo(() => (n.startsWith("/") ? a.filter((e) => e.type === z.kc.CHAT) : a), [n, a]),
                c = s.useMemo(() => (n.startsWith("/") ? n.substring(1) : n), [n]);
            return {
                query: n,
                results: s.useMemo(() => (0, K.I)(r, F, c), [r, c]),
                setQuery: i,
                unfilteredCount: t.length,
                isLoaded: e,
            };
        })();
    return m && null != r && u > 0
        ? (0, l.jsx)(et.A, {
              bar: (0, l.jsx)(H.I, { size: "sm", query: c, onChange: d, onClear: () => d("") }),
              inModal: !1,
              title: X.intl.string(X.t["0hKkS+"]),
              children: r.map((e, o) =>
                  (0, l.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              (0, l.jsx)(ee, {
                                  applicationIcon: t,
                                  applicationName: n,
                                  canNavigate: i,
                                  command: e,
                                  guildId: a,
                              }),
                              o < r.length - 1 ? (0, l.jsx)(T.c, {}) : null,
                          ],
                      },
                      e.id,
                  ),
              ),
          })
        : (0, l.jsx)(E.Z, {
              className: en.a,
              editable: !0,
              children: (0, l.jsx)(I.E, {
                  color: "text-muted",
                  variant: "body-sm/normal",
                  children: m ? X.intl.string(X.t["x78c+J"]) : X.intl.string(X.t.NyYbcx),
              }),
          });
}
var el = n(118661),
    es = n(16101);
function ea(e) {
    let { application: t, canNavigate: n, guildId: i, hasCommandsScope: a } = e,
        r = (0, o.bG)([B.A], () => B.A.isUnavailable()),
        c = (0, o.bG)([B.A], () => null != B.A.getApplicationPermissions() && null != B.A.getCommands());
    return (s.useEffect(() => (D.hu(t.id), D.AL), [t.id]),
    s.useEffect(() => {
        (D.gV(t.id, i, t.id), D.Jw(i, t.id));
    }, [t.id, i]),
    !r && (c || a))
        ? (0, l.jsxs)(s.Fragment, {
              children: [
                  (0, l.jsx)(W, {
                      icon: (0, l.jsx)(M.SlashBoxIcon, { size: "md", color: "currentColor" }),
                      title: X.intl.string(X.t.RGoJNN),
                  }),
                  (0, l.jsx)(I.E, {
                      color: "text-muted",
                      variant: "body-sm/normal",
                      children: X.intl.string(X.t.sCkD3Z),
                  }),
                  (0, l.jsx)(er, { guildId: i, applicationId: t.id }),
                  (0, l.jsx)(ei, { applicationIcon: t.icon, applicationName: t.name, canNavigate: n, guildId: i }),
              ],
          })
        : null;
}
function er(e) {
    let { applicationId: t, guildId: n } = e,
        { originalApplicationPermissions: i, editedTargetPermissions: s, selectedPermissionCount: a } = (0, U.A)(n, t);
    return (0, l.jsx)("div", {
        className: es.zi,
        children: (0, l.jsx)(el.A, {
            applicationId: t,
            guildId: n,
            inModal: !1,
            editedTargetPermissions: s,
            originalApplicationPermissions: i,
            selectedPermissionCount: a,
        }),
    });
}
var eo = n(501925),
    ec = n(486020),
    ed = n(661191),
    eu = n(427262),
    em = n(179771);
function eg(e, t) {
    return null != e.bot && (t.scopes?.includes(em.F.BOT) ?? !1);
}
function eh(e) {
    return e.scopes?.includes(em.F.APPLICATIONS_COMMANDS) ?? !1;
}
var ex = n(652215),
    eA = n(331322),
    ep = n(866665),
    eb = n(638916),
    ef = n(783734);
function ej(e) {
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
    return (0, l.jsxs)(eA.B, {
        direction: "horizontal",
        fullWidth: !0,
        gap: 16,
        children: [
            null != i || null != s
                ? (function (e, t, n, i, s) {
                      if (null != t) return (0, l.jsx)("img", { alt: "", src: t, className: P()(ef.P0, i) });
                      let a = null;
                      return (
                          null != e &&
                              (a =
                                  "string" == typeof e
                                      ? (0, l.jsx)("img", { alt: "", src: e, className: P()(ef.Kk, i) })
                                      : (0, l.jsx)(e, { className: P()(ef.Kk, i), color: "currentColor" })),
                          (0, l.jsx)("div", { style: { backgroundColor: n }, className: P()(ef.P0, s), children: a })
                      );
                  })(i, s, a, r, o)
                : null,
            (0, l.jsxs)(eA.B, {
                justify: "center",
                children: [
                    (function (e) {
                        let { name: t, description: n, details: i, detailsClassName: s, isHeader: a, isPremium: r } = e,
                            o = i?.map((e, t) => {
                                let { icon: n, text: i } = e;
                                return (0, l.jsxs)(
                                    "div",
                                    {
                                        className: P()(ef.yM, a ? ef.Vw : null),
                                        children: [
                                            null != n
                                                ? (0, l.jsx)(n, { size: "xs", color: "currentColor", className: ef.Ul })
                                                : null,
                                            (0, l.jsx)(I.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                className: s,
                                                children: i,
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            });
                        return (0, l.jsxs)(eA.B, {
                            gap: 0,
                            children: [
                                (0, l.jsxs)(c.D, {
                                    variant: a ? "heading-xl/semibold" : "heading-sm/medium",
                                    className: a ? ef.wx : ef.K8,
                                    children: [
                                        t,
                                        r &&
                                            (0, l.jsx)(ep.m, {
                                                text: X.intl.string(X.t.VFuFum),
                                                children: (0, l.jsx)(eb.TicketIcon, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: ef.PC,
                                                }),
                                            }),
                                    ],
                                }),
                                null != n
                                    ? (0, l.jsx)(I.E, { variant: "body-sm/normal", color: "text-default", children: n })
                                    : null,
                                (0, l.jsx)(eA.B, { direction: "horizontal", children: o }),
                            ],
                        });
                    })({ name: t, description: n, details: d, detailsClassName: u, isHeader: m, isPremium: g }),
                    h,
                ],
            }),
        ],
    });
}
var eN = n(452027),
    eC = n(417454),
    ev = n(709066),
    eE = n(760711),
    eI = n(136722),
    eT = n(778858),
    ey = n(376092),
    eS = n(619019),
    ek = n(696451),
    eO = n(317525);
let ew = [];
var eL = n(737496);
function eR(e) {
    let { guild: t, applicationIntegration: n } = e,
        { application: i } = n,
        a = (function (e, t) {
            let n = t.bot,
                i = s.useMemo(() => (null != n ? new eS.A(n) : null), [n]),
                l = i?.id,
                a = (0, o.bG)([ek.Ay], () => (null != l ? ek.Ay.getMember(e.id, l) : null), [l, e.id]),
                r = (0, o.bG)([eO.A], () => eO.A.getEveryoneRole(e), [e]),
                c = a?.roles ?? ew,
                d = (0, o.yK)([eO.A], () => eO.A.getManyRoles(e.id, c), [e.id, c]);
            s.useEffect(() => {
                null != l && eT.A.requestMembersById(e.id, l);
            }, [e.id, l]);
            let { grantedPermissions: u, deniedPermissions: m } = s.useMemo(() => {
                let e = eI.kg(r.permissions, ...d.map((e) => e.permissions)),
                    t = [],
                    n = [];
                for (let i of ey.Q) eI.zy(e, i) ? t.push(i) : n.push(i);
                return { grantedPermissions: t, deniedPermissions: n };
            }, [r, d]);
            return null == i ? null : { bot: i, member: a, roleIds: c, grantedPermissions: u, deniedPermissions: m };
        })(t, i);
    if (null == a) return null;
    let { bot: r, member: c, roleIds: d, grantedPermissions: u, deniedPermissions: m } = a,
        h = ec.Ay.getApplicationIconURL({ id: i.id, guildMember: c, bot: i.bot, icon: i.icon, size: 32 });
    return (0, l.jsx)(E.Z, {
        editable: !0,
        className: eL.Nr,
        children: (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            children: [
                (0, l.jsxs)(g.A, {
                    align: g.A.Align.CENTER,
                    children: [
                        (0, l.jsx)("img", { alt: "", src: h, className: eL.P0 }),
                        (0, l.jsx)(I.E, {
                            color: "text-strong",
                            variant: "body-sm/normal",
                            children: X.intl.format(X.t.GyhzGw, { user: r.toString() }),
                        }),
                        (0, l.jsx)(ev.A, { className: eL.Tc, verified: r.isVerifiedBot() }),
                    ],
                }),
                (0, l.jsx)(T.c, { className: eL.yF }),
                d.length > 0
                    ? (0, l.jsx)(eN.D, {
                          label: X.intl.format(X.t.PCs0oo, { numRoles: d.length }),
                          children: (0, l.jsx)(eC.Ay, {
                              className: eL.pf,
                              user: r,
                              guild: t,
                              userRoleIds: d,
                              wrap: !1,
                              readOnly: !0,
                          }),
                      })
                    : null,
                u.length > 0 || m.length > 0
                    ? (0, l.jsx)(eE.A, {
                          grantedPermissions: u,
                          grantedPermissionsHeader: X.intl.string(X.t["hA4+su"]),
                          disabledPermissions: m,
                          disabledPermissionsHeader: X.intl.string(X.t["/rEZ2i"]),
                          guild: t,
                      })
                    : null,
            ],
        }),
    });
}
var eM = n(47167),
    e_ = n(994500),
    eP = n(287809),
    eG = n(314116),
    eW = n(778492),
    eD = n(95477),
    eB = n(691885),
    eU = n(123292),
    eH = n(824953),
    eV = n(147925),
    ez = n(440193);
function eK(e) {
    let { webhook: t, editedWebhook: n, channelOptions: i, isExpanded: a, errors: r, onToggleExpand: o } = e,
        c = s.useMemo(() => {
            var e;
            return null != (e = t.avatar) && /^data:/.test(e)
                ? e
                : (0, ec.ku)({ id: t.id, avatar: e, discriminator: "0000" });
        }, [t]),
        d = s.useCallback(() => {
            (0, eG.A)({
                title: X.intl.formatToPlainString(X.t.gBKqZ0, { name: t.name }),
                subtitle: X.intl.string(X.t.zO9jrD),
                confirmText: X.intl.string(X.t.CMy0Cj),
                onConfirm: () => {
                    eH.A.delete(t.guild_id, t.id).catch(() => {
                        O.A.show({ title: X.intl.string(X.t.LpbaFV), body: X.intl.string(X.t["/4TwKf"]) });
                    });
                },
            });
        }, [t.guild_id, t.id, t.name]),
        m = [];
    null != t.source_channel &&
        null != t.source_guild &&
        (m.push({ icon: eW.AnnouncementsIcon, text: t.source_channel.name }),
        m.push({
            text: (0, l.jsx)(
                "span",
                {
                    className: ez.lM,
                    children: X.intl.format(X.t["H/jJ6R"], {
                        guildHook: () => (0, l.jsx)("span", { className: ez.VZ, children: t.source_guild.name }, t.id),
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
                className: ez.rf,
                children: [
                    (0, l.jsx)(T.c, { className: ez.fV }),
                    (0, l.jsxs)(eA.B, {
                        gap: 24,
                        children: [
                            (0, l.jsxs)(eA.B, {
                                direction: "horizontal",
                                gap: 16,
                                children: [
                                    (0, l.jsx)(eD.k, {
                                        label: X.intl.string(X.t.I1o5gV),
                                        value: n.name,
                                        onChange: (e) => {
                                            u.A.updateWebhook({ name: e });
                                        },
                                        maxLength: 80,
                                        error: r.name,
                                    }),
                                    (0, l.jsx)(eB.l, {
                                        label: X.intl.string(X.t["4TuWfc"]),
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
                            (0, l.jsx)(T.c, { className: ez.Bd }),
                            (0, l.jsx)(eU.Q, {
                                onClick: d,
                                size: "sm",
                                variant: "critical",
                                text: X.intl.string(X.t.CMy0Cj),
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(E.Z, {
            editable: !0,
            className: ez.Nr,
            children: (0, l.jsxs)(eA.B, {
                children: [
                    (0, l.jsx)(q.D, {
                        className: ez.wx,
                        "aria-expanded": a,
                        onClick: o,
                        children: (0, l.jsxs)(eA.B, {
                            direction: "horizontal",
                            justify: "space-between",
                            align: "center",
                            children: [
                                (0, l.jsx)(ej, { name: t.name, imageSrc: c, details: m }),
                                (0, l.jsx)(eV.A, { className: ez.eO, expanded: a, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    g,
                ],
            }),
        })
    );
}
var eF = n(935399),
    eY = n(620632),
    eq = n(451988),
    eQ = n(890497),
    eZ = n(765178),
    eJ = n(342298),
    eX = n(957565),
    e$ = n(423959);
function e0(e, t) {
    return null != t && /^data:/.test(t) ? t : (0, ec.ku)({ id: e.id, avatar: t, discriminator: "0000" });
}
function e2(e) {
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
        [x] = s.useState(new eq.Ep());
    s.useEffect(() => () => x.stop(), [x]);
    let A = s.useRef(null);
    (0, eF.Ay)(() => {
        !0 === o && (u.A.startEditingWebhook(n.id), A.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
    });
    let p = s.useMemo(() => e0(n, n.avatar), [n]),
        b = s.useCallback(() => {
            let e = `${(0, eY.TP)(!1)}${ex.Rsh.WEBHOOK_INTEGRATION(n.id, n.token)}`;
            (0, eX.C)(e);
        }, [n]),
        f = s.useCallback(() => {
            (0, eG.A)({
                title: X.intl.formatToPlainString(X.t.QVFjHh, { name: n.name }),
                subtitle: X.intl.format(X.t["rIWe+5"], { name: n.name }),
                confirmText: X.intl.string(X.t["W+K1Fs"]),
                cancelText: X.intl.string(X.t.xNhj0O),
                onConfirm: () => {
                    eH.A.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? O.A.show({ title: X.intl.string(X.t.N5riYn), body: X.intl.string(X.t.eAxcCc) })
                            : O.A.show({ title: X.intl.string(X.t.N5riYn), body: X.intl.string(X.t["/4TwKf"]) });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        j = [];
    null != n.user
        ? j.push({
              icon: C.ClockIcon,
              text: X.intl.formatToPlainString(X.t["7EcUbr"], {
                  user: (function (e) {
                      if (null == e) return null;
                      let t = new eS.A(e);
                      return eu.Ay.getUserTag(t);
                  })(n.user),
                  timestamp: ed.default.extractTimestamp(n.id),
              }),
          })
        : j.push({
              icon: C.ClockIcon,
              text: X.intl.formatToPlainString(X.t["7mv59O"], { timestamp: ed.default.extractTimestamp(n.id) }),
          });
    let N = null;
    return (
        r &&
            null != i &&
            (N = (0, l.jsxs)("div", {
                className: e$.rf,
                children: [
                    (0, l.jsx)(T.c, { className: e$.fV }),
                    (0, l.jsxs)(g.A, {
                        children: [
                            (0, l.jsx)(g.A.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, l.jsxs)(g.A, {
                                    className: e$.R3,
                                    direction: g.A.Direction.VERTICAL,
                                    children: [
                                        (0, l.jsx)(eJ.A, {
                                            image: i.avatar,
                                            onChange: (e) => {
                                                u.A.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => e0(n, e),
                                            imageClassName: e$.mr,
                                            showIcon: !0,
                                        }),
                                        null != c.avatar && "" !== c.avatar
                                            ? (0, l.jsx)(I.E, {
                                                  color: "text-feedback-critical",
                                                  variant: "body-sm/normal",
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
                                                children: (0, l.jsx)(eD.k, {
                                                    label: X.intl.string(X.t.ukdxuo),
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
                                                    children: (0, l.jsx)(eQ.Z, {
                                                        label: X.intl.string(X.t.GK18KJ),
                                                        value: i.channel_id,
                                                        options: a,
                                                        formatOption: (e) => {
                                                            let { value: t, label: n } = e;
                                                            return { id: t.toString(), value: t, label: n };
                                                        },
                                                        onSelectionChange: (e) => {
                                                            u.A.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: X.intl.string(X.t.r2ptsz),
                                                        selectionMode: "single",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(T.c, { className: e$.Bd }),
                                    (0, l.jsxs)(g.A, {
                                        children: [
                                            (0, l.jsx)(ep.m, {
                                                text: X.intl.string(X.t.wwdb3g),
                                                shouldShow: m,
                                                hideOnClick: !1,
                                                forceOpen: m,
                                                children: (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: e$.cL,
                                                    children: (0, l.jsx)(k.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: X.intl.string(X.t.Ae9rUW),
                                                        "aria-label": "",
                                                        onClick: () => {
                                                            (h(!0),
                                                                eZ.O.announce(X.intl.string(X.t.wwdb3g)),
                                                                x.start(1e3, () => h(!1)),
                                                                b());
                                                        },
                                                        disabled: null == n.token || "" === n.token,
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)(k.$, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: X.intl.string(X.t.jVrUnC),
                                                onClick: f,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, l.jsx)(E.Z, {
            ref: A,
            editable: !0,
            id: t,
            className: P()(e$.Nr, o ? e$.U6 : null),
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(q.D, {
                        className: e$.wx,
                        "aria-expanded": r,
                        onClick: d,
                        children: (0, l.jsxs)(g.A, {
                            align: g.A.Align.CENTER,
                            children: [
                                (0, l.jsx)(ej, { name: n.name, imageSrc: p, details: j }),
                                (0, l.jsx)(eV.A, { className: e$.eO, expanded: r, "aria-hidden": !0 }),
                            ],
                        }),
                    }),
                    N,
                ],
            }),
        })
    );
}
var e1 = n(140659);
function e8(e) {
    let {
            webhooks: t,
            selectableWebhookChannels: n,
            lastCreatedWebhookId: i,
            editedWebhook: a,
            errors: r,
            canNavigate: o,
        } = e,
        c = s.useMemo(
            () => Object.values(n).map((e) => ({ id: e.id, value: e.id, label: (0, eM.m1)(e, eP.default, e_.A, !0) })),
            [n],
        ),
        d = s.useMemo(
            () =>
                (function (e, t) {
                    let n = {};
                    for (let i of e) {
                        let e = n[i.channel_id];
                        if (null != e) {
                            e.webhooks.push(i);
                            continue;
                        }
                        let l = t(i.channel_id);
                        null != l && (n[i.channel_id] = { channel: l, webhooks: [i] });
                    }
                    return Object.values(n).sort((e, t) => e.channel.name.localeCompare(t.channel.name));
                })(t, (e) => n[e]),
            [n, t],
        ),
        m = s.useCallback(
            (e) => {
                o() && (e === a?.id ? u.A.stopEditingWebhook() : u.A.startEditingWebhook(e));
            },
            [o, a],
        );
    return (0, l.jsx)("div", {
        className: e1.__invalid_list,
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
                                variant: "body-md/medium",
                                className: e1.x,
                                children: X.intl.format(X.t.TKDIZg, {
                                    channelHook: () =>
                                        (0, l.jsx)(
                                            "span",
                                            { className: e1.H, children: (0, eM.m1)(t, eP.default, e_.A, !0) },
                                            t.id,
                                        ),
                                }),
                            }),
                            n.map((e) =>
                                e.type === ex.NH1.CHANNEL_FOLLOWER
                                    ? (0, l.jsx)(
                                          eK,
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
                                          e2,
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
var e5 = n(710135);
function e3(e) {
    let { application: t, guild: n, integration: i, ...s } = e,
        a = (0, w.iD)(n.id, t.id);
    function r() {
        R.A.disableIntegration(n.id, i.id).catch(() => {
            O.A.show({ title: X.intl.string(X.t.wYqMmI), body: X.intl.string(X.t.A4Mnst) });
        });
    }
    return null != a
        ? (0, l.jsx)(L.VI, { ...s, app: a, onPlainConfirm: r })
        : (0, l.jsx)(j.u, {
              ...s,
              title: X.intl.formatToPlainString(X.t["rL9d/1"], { applicationName: t.name }),
              subtitle: X.intl.format(X.t.FGE8ya, { applicationName: t.name }),
              confirmText: X.intl.string(X.t.ebGf4m),
              onConfirm: r,
          });
}
function e6(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: i,
            editedWebhook: a,
            errors: r,
            canNavigate: c,
        } = e,
        { application: d, integration: u, webhooks: m } = n,
        h = (0, o.bG)([p.A], () => p.A.can(ex.xBc.MANAGE_ROLES, t), [t]),
        x = (0, o.bG)(
            [p.A],
            () => null != t && null != d && (null == d.bot || p.A.canManageUser(ex.xBc.MANAGE_GUILD, d.bot.id, t)),
            [d, t],
        ),
        A = (0, o.bG)([p.A], () => p.A.can(ex.xBc.MANAGE_WEBHOOKS, t), [t]),
        b = s.useCallback(() => {
            c() && (0, N.qf)((e) => (0, l.jsx)(e3, { guild: t, application: d, integration: u, ...e }));
        }, [d, c, t, u]),
        f = s.useMemo(() => {
            let e = [
                {
                    icon: C.ClockIcon,
                    text: X.intl.formatToPlainString(X.t.gcdJ8J, { timestamp: ed.default.extractTimestamp(u.id) }),
                },
            ];
            return (
                null != u.user &&
                    e.push({
                        icon: v.UserIcon,
                        text: X.intl.formatToPlainString(X.t.qE7oqs, { user: eu.Ay.getUserTag(u.user) }),
                    }),
                e
            );
        }, [u.id, u.user]),
        j = s.useMemo(
            () =>
                eg(d, u)
                    ? (0, l.jsx)(eR, { guild: t, applicationIntegration: n })
                    : (0, l.jsx)(E.Z, {
                          className: e5.aM,
                          editable: !0,
                          children: (0, l.jsx)(I.E, {
                              color: "text-muted",
                              variant: "body-sm/normal",
                              children: X.intl.string(X.t.pfLnza),
                          }),
                      }),
            [d, n, t, u],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ej, {
                name: d.name,
                imageSrc: ec.Ay.getApplicationIconURL({ id: d.id, icon: d.icon, size: 32 }),
                details: f,
                isHeader: !0,
            }),
            d?.description != null ? (0, l.jsx)(eo.A, { userBio: d.description, className: e5.ux }) : null,
            h ? (0, l.jsx)(ea, { application: d, canNavigate: c, guildId: t.id, hasCommandsScope: eh(u) }) : null,
            (0, l.jsx)(T.c, { className: e5.zN }),
            null != d.bot
                ? (0, l.jsxs)("div", {
                      className: e5.uW,
                      children: [
                          (0, l.jsx)(W, {
                              icon: (0, l.jsx)(y.RobotIcon, { size: "xs", color: "currentColor" }),
                              title: X.intl.string(X.t.AOdOYr),
                          }),
                          j,
                      ],
                  })
                : null,
            (0, l.jsxs)("div", {
                className: e5.uW,
                children: [
                    (0, l.jsx)(W, {
                        icon: (0, l.jsx)(S.WebhookIcon, { size: "md", color: "currentColor" }),
                        title: X.intl.string(X.t["t9ZX/I"]),
                    }),
                    m.length > 0
                        ? (0, l.jsx)(e8, {
                              webhooks: m,
                              editedWebhook: a,
                              selectableWebhookChannels: i,
                              errors: r,
                              canNavigate: c,
                          })
                        : (0, l.jsx)(E.Z, {
                              className: e5.aM,
                              editable: !0,
                              children: (0, l.jsx)(I.E, {
                                  color: "text-muted",
                                  variant: "body-sm/normal",
                                  children: A ? X.intl.string(X.t.ahPd2Y) : X.intl.string(X.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, l.jsx)(T.c, { className: e5.zN }),
            (0, l.jsxs)(g.A, {
                className: e5.uW,
                justify: g.A.Justify.BETWEEN,
                align: g.A.Align.CENTER,
                children: [
                    (0, l.jsx)(I.E, {
                        color: "text-default",
                        variant: "body-sm/normal",
                        children: x ? X.intl.string(X.t.hdneL4) : X.intl.string(X.t.xRCMqx),
                    }),
                    (0, l.jsx)(g.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, l.jsx)(k.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: X.intl.string(X.t.ebGf4m),
                            disabled: !x,
                            onClick: b,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var e9 = n(573648);
(n(323874), n(14289), n(35956));
var e7 = n(536637),
    e4 = n.n(e7),
    te = n(788373),
    tt =
        (((i = {})[(i.ONE_DAY = 1)] = "ONE_DAY"),
        (i[(i.THREE_DAYS = 3)] = "THREE_DAYS"),
        (i[(i.SEVEN_DAYS = 7)] = "SEVEN_DAYS"),
        (i[(i.FOURTEEN_DAYS = 14)] = "FOURTEEN_DAYS"),
        (i[(i.THIRTY_DAYS = 30)] = "THIRTY_DAYS"),
        i),
    tn = n(125744),
    ti = n(139033),
    tl = n(408278),
    ts = n(663417),
    ta = n(150934),
    tr = n(28863),
    to = n(121681),
    tc = n(351906),
    td = n(445884),
    tu = n(221851);
function tm(e) {
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
        [x, A] = s.useState(!1),
        b = (0, o.bG)([tc.A], () => tc.A.hidePersonalInformation),
        f = (0, o.bG)([p.A], () => p.A.can(ex.xBc.KICK_MEMBERS, n)),
        j = s.useCallback(() => {
            (A(!0), h(i));
        }, [i, h]),
        N = s.useCallback(() => {
            if (!i.syncing)
                if (f || i.expire_behavior !== te.F.KICK) {
                    let e =
                        i.expire_behavior === te.F.REMOVE_ROLE
                            ? X.intl.string(X.t["6kpw4i"])
                            : X.intl.string(X.t.fQUQIJ);
                    (0, eG.A)({
                        title: X.intl.string(X.t.emx3lN),
                        subtitle: i.type === tn.s.YOUTUBE ? X.intl.string(X.t.anKQWU) : X.intl.string(X.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => m(i),
                        variant: "critical",
                    });
                } else
                    (0, ti.A)({
                        title: X.intl.string(X.t.emx3lN),
                        subtitle: i.type === tn.s.YOUTUBE ? X.intl.string(X.t.pDCiEf) : X.intl.string(X.t.sQqHFk),
                    });
        }, [i, m, f]),
        v = s.useCallback(() => {
            R.A.syncIntegration(n.id, i.id);
        }, [n.id, i.id]),
        y = s.useCallback(() => {
            null != i.role_id && (R.A.setSection(ex.BEX.ROLES), R.A.selectRole(i.role_id));
        }, [i.role_id]),
        {
            serviceName: S,
            channelURL: O,
            expireBehaviorLabel: w,
            syncLabel: L,
            subscribersText: M,
        } = s.useMemo(() => {
            let e = e9.A.get(i.type)?.getPlatformUserUrl?.({ id: i.account.id, name: i.account.name }) ?? "";
            switch (i.type) {
                case tn.s.YOUTUBE:
                    return {
                        serviceName: X.intl.string(X.t.aS6cK4),
                        expireBehaviorLabel: X.intl.string(X.t.A5MiqO),
                        syncLabel: X.intl.string(X.t["7vHKVe"]),
                        subscribersText: X.intl.formatToPlainString(X.t["7lNtce"], {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case tn.s.TWITCH:
                default:
                    return {
                        serviceName: X.intl.string(X.t.q4pBG3),
                        expireBehaviorLabel: X.intl.string(X.t["S/WCrG"]),
                        syncLabel: X.intl.string(X.t["0jbPK4"]),
                        subscribersText: X.intl.formatToPlainString(X.t.RdUTrl, {
                            subscribers: i.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [i.account, i.subscriber_count, i.type]),
        _ = (0, o.bG)([eO.A], () => (null != i.role_id ? eO.A.getRole(n.id, i.role_id) : void 0)),
        { roleLink: G, syncDescriptionText: W } = s.useMemo(() => {
            let e;
            e = null != _ ? (0, l.jsx)(tr.Anchor, { onClick: y, children: _.name }) : X.intl.string(X.t.PoWNfe);
            let t = e9.A.get(i.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    i.revoked && null != t
                        ? X.intl.formatToPlainString(X.t.G16Wji, { user: i.user, platformName: t.name })
                        : X.intl.formatToPlainString(X.t.unl3AP, { datetime: e4()(i.synced_at).calendar() }),
            };
        }, [_, y, i.revoked, i.synced_at, i.type, i.user]),
        D = (0, o.bG)([eO.A], () => eO.A.getSortedRoles(n.id)),
        B = s.useMemo(() => {
            let e = to.Ay.getGuildEmoji(n.id),
                t = D.filter((e) => null != e.tags && e.tags.integration_id === i.id).map((e) => e.id);
            return i.enable_emoticons
                ? e
                      .filter((e) => null != i.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, D, i.enable_emoticons, i.id, i.role_id]);
    if (
        (s.useEffect(() => {
            a?.id === i.id && a?.enabled === !0 && A(!1);
        }, [a, i.id]),
        i.enabled && null != i.user)
    )
        t = [
            {
                icon: C.ClockIcon,
                text: b
                    ? X.intl.formatToPlainString(X.t.gcdJ8J, { timestamp: ed.default.extractTimestamp(i.id) })
                    : X.intl.formatToPlainString(X.t.Nu9sat, {
                          user: null != i.user ? new eS.A(i.user).tag : null,
                          timestamp: ed.default.extractTimestamp(i.id),
                      }),
            },
        ];
    else {
        let e = new URL(O);
        t = [
            {
                text: X.intl.format(X.t.BegylZ, {
                    serviceName: S,
                    accountUrl: O,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let U = (0, l.jsxs)(g.A, {
            className: td.wx,
            align: g.A.Align.CENTER,
            children: [
                (0, l.jsx)(ej, { name: `${i.name}`, detailsClassName: td.h_, details: t }),
                i.enabled
                    ? (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, l.jsx)(eV.A, { className: td.eO, expanded: r && !x, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)(g.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: x
                              ? (0, l.jsx)(tl.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: ts.RefreshIcon,
                                    "aria-label": X.intl.string(X.t["7sCN8m"]),
                                })
                              : (0, l.jsx)(k.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: j,
                                    text: X.intl.string(X.t["7sCN8m"]),
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
                className: td.rf,
                direction: g.A.Direction.VERTICAL,
                children: [
                    (0, l.jsx)(T.c, { className: td.fV }),
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
                                            variant: "heading-sm/semibold",
                                            className: tu.QB,
                                            children: X.intl.string(X.t.eBtNBa),
                                        }),
                                        (0, l.jsx)(I.E, {
                                            className: td.RZ,
                                            color: "text-strong",
                                            variant: "body-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)(g.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, l.jsx)(c.D, {
                                            variant: "heading-xs/semibold",
                                            className: tu.QB,
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
                                                            variant: "body-sm/normal",
                                                            children: i,
                                                        }),
                                                        (0, l.jsx)(I.E, {
                                                            color: "text-default",
                                                            variant: "body-xs/normal",
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, l.jsx)(tl.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: ts.RefreshIcon,
                                                          "aria-label": X.intl.string(X.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, l.jsx)(k.$, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: X.intl.string(X.t.BkuOO6),
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
                        labelText: L,
                        subscribersText: M,
                        descriptionText: W,
                        roleLink: G,
                        onSync: v,
                    }),
                    (0, l.jsx)(T.c, { className: td.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: i, onGracePeriodChange: s } = e;
                        return (0, l.jsxs)(g.A, {
                            children: [
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eB.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: te.F.REMOVE_ROLE.toString(),
                                                label: X.intl.string(X.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: te.F.KICK.toString(),
                                                label: X.intl.string(X.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => i(parseInt(e)),
                                    }),
                                }),
                                (0, l.jsx)(g.A.Child, {
                                    basis: "50%",
                                    children: (0, l.jsx)(eB.l, {
                                        selectionMode: "single",
                                        label: X.intl.string(X.t.uiXMow),
                                        placeholder: X.intl.string(X.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(tt)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: X.intl.formatToPlainString(X.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => s(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: a,
                        labelText: w,
                        onBehaviorChange: function (e) {
                            u.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            u.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !f &&
                        a.expire_behavior === te.F.KICK &&
                        (0, l.jsx)(I.E, {
                            className: td.Ce,
                            color: "text-feedback-critical",
                            variant: "body-sm/normal",
                            children: X.intl.string(X.t.mThMlB),
                        }),
                    i.type === tn.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: i } = e;
                              return (0, l.jsxs)(g.A, {
                                  direction: g.A.Direction.VERTICAL,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: P()(tu.QX, tu.QB),
                                          children: (0, l.jsx)(ta.S, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => i(e),
                                              label: X.intl.string(X.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, l.jsx)(g.A, {
                                          wrap: g.A.Wrap.WRAP,
                                          className: td.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, l.jsx)(
                                                  ep.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, l.jsx)(
                                                          "img",
                                                          {
                                                              alt: X.intl.formatToPlainString(X.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: P()(td.Zg, "emoji", "jumboable"),
                                                              src: ec.Ay.getEmojiURL({
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
                              emojis: B,
                              onToggle: function (e) {
                                  u.A.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, l.jsx)(T.c, { className: td.Bd }),
                    (0, l.jsx)(g.A, {
                        children: (0, l.jsx)(k.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: X.intl.string(X.t.M6q6eX),
                            onClick: N,
                        }),
                    }),
                ],
            })),
        (0, l.jsx)(E.Z, {
            editable: !0,
            className: td.Nr,
            children: (0, l.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                children: [
                    i.enabled
                        ? (0, l.jsx)(q.D, { className: td._S, "aria-expanded": r && !x, onClick: d, children: U })
                        : U,
                    H,
                ],
            }),
        })
    );
}
var tg = n(260294);
function th(e) {
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
        g = e9.A.get(a),
        h = s.useCallback(
            async (e) => {
                m() && (await R.A.enableIntegration(i.id, e.type, e.id), u.A.startEditingIntegration(e.id));
            },
            [m, i.id],
        ),
        x = s.useCallback(
            (e) => {
                m() && (e.id === n?.id && u.A.stopEditingIntegration(), R.A.disableIntegration(i.id, e.id));
            },
            [m, n, i.id],
        ),
        A = s.useCallback(
            (e) => {
                m() && (e === n?.id ? u.A.stopEditingIntegration() : u.A.startEditingIntegration(e));
            },
            [m, n],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ej, {
                name: r,
                icon: g?.icon.whiteSVG,
                iconBackgroundColor: g?.color,
                iconClassName: tg.tV,
                description: o,
                isHeader: !0,
            }),
            (0, l.jsx)(T.c, { className: tg.zN }),
            "message" in d &&
                (0, l.jsx)(I.E, {
                    className: tg.kc,
                    color: "text-feedback-critical",
                    variant: "body-sm/normal",
                    children: d.message,
                }),
            t.map((e) =>
                (0, l.jsx)(
                    tm,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: i,
                        isExpanded: n?.id === e.id,
                        onEnable: h,
                        onDisable: x,
                        onToggleExpand: () => A(e.id),
                    },
                    e.id,
                ),
            ),
            (0, l.jsx)(I.E, { className: tg.BK, color: "text-muted", variant: "body-sm/normal", children: c }),
        ],
    });
}
var tx = n(462887),
    tA = n(736653),
    tp = n(945235);
function tb(e) {
    var t;
    let n,
        { followedChannelWebhooks: i, editedWebhook: s, selectableWebhookChannels: a, errors: r, canNavigate: o } = e,
        d = (0, tA.Ay)();
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(I.E, {
                variant: "body-sm/normal",
                children: X.intl.format(X.t["5u+aV1"], {
                    helpdeskArticle: f.A.getArticleURL(ex.MVz.CHANNEL_FOLLOWING),
                }),
            }),
            (0, l.jsx)(T.c, { className: tp.zN }),
            i.length > 0
                ? (0, l.jsx)(e8, {
                      webhooks: i,
                      editedWebhook: s,
                      selectableWebhookChannels: a,
                      errors: r,
                      canNavigate: o,
                  })
                : ((t = () => open(f.A.getArticleURL(ex.MVz.CHANNEL_FOLLOWING))),
                  (n = (0, tx.M)(d) ? "/assets/a29cabf3e1357986.svg" : "/assets/c733a28e6fcba3ef.svg"),
                  (0, l.jsxs)(g.A, {
                      direction: g.A.Direction.VERTICAL,
                      align: g.A.Align.CENTER,
                      children: [
                          (0, l.jsx)("img", { alt: "", src: n, className: tp.QT }),
                          (0, l.jsx)(c.D, { variant: "heading-sm/semibold", children: X.intl.string(X.t.gzuVH0) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: tp.nM,
                              children: (0, l.jsx)(k.$, {
                                  variant: "primary",
                                  text: X.intl.string(X.t["ZwSt+T"]),
                                  onClick: t,
                              }),
                          }),
                      ],
                  })),
        ],
    });
}
var tf = n(22231),
    tj = n(429913),
    tN = n(713654),
    tC = n(769015),
    tv = n(887501),
    tE = n(514810),
    tI = n(43105),
    tT = n(431527),
    ty = n(320448),
    tS = n(149468),
    tk = n(264322),
    tO = n(129230),
    tw = n(320426),
    tL = n(187679);
function tR(e) {
    var t, n, i;
    let {
            name: a,
            icon: r,
            imageSrc: c,
            iconBackgroundColor: d,
            iconClassName: u,
            iconWrapperClassName: m,
            details: g,
            integration: h,
            buttonText: A,
            buttonDisabled: p,
            hasNextSection: b,
            onButtonClick: f,
            guildId: j,
            isScrolling: N,
            canShowMigrationTooltip: C,
            trailing: v,
        } = e,
        [T, O] = s.useState(!1),
        w = C && !N && !T && void 0 !== j && null != h,
        L = s.useRef(null),
        R = s.useRef(null),
        _ =
            null == A || null == f
                ? null
                : b
                  ? (0, l.jsxs)(eA.B, {
                        direction: "horizontal",
                        fullWidth: !1,
                        align: "center",
                        ref: R,
                        children: [
                            (0, l.jsx)(I.E, { variant: "body-sm/normal", children: A }),
                            (0, l.jsx)(ty.ChevronSmallRightIcon, {
                                size: "custom",
                                color: "currentColor",
                                width: 10,
                                height: 10,
                                className: tL.OW,
                            }),
                        ],
                    })
                  : (0, l.jsx)(k.$, { size: "sm", buttonRef: L, disabled: p, onClick: f, text: A });
    s.useEffect(() => {
        w &&
            tO.default.track(ex.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, tS.H$)(j),
                application_id: h?.application.id,
                location: "overview",
            });
    }, [j, h?.application.id, w]);
    let G =
            w && (null != R.current || null != L.current)
                ? (0, l.jsx)(tI.A, {
                      targetElementRef: b ? R : L,
                      title: X.intl.string(X.t.ufFDiC),
                      body: X.intl.string(X.t.TyMJwC),
                      onRequestClose: () => {
                          (O(!0), tw.A.dismissOverviewTooltip(j, h.integration));
                      },
                      position: "bottom",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        W = (0, o.yK)([x.A], () =>
            null != h && null != j ? (x.A.getApplicationEntitlementsForGuild(h.application.id, j) ?? []) : [],
        ),
        D = (0, tk.ON)(j, !0),
        B =
            null != h &&
            ((t = h.application),
            (n = h.integration),
            (i = D.result?.sections),
            eh(n) && Object.keys(i?.[t.id]?.commands ?? {}).length > 0),
        U = (0, l.jsxs)(eA.B, {
            direction: "horizontal",
            align: "center",
            children: [
                (0, l.jsx)(ej, {
                    name: a,
                    icon: r,
                    imageSrc: c,
                    iconBackgroundColor: d,
                    iconClassName: u,
                    iconWrapperClassName: m,
                    details: g,
                    isPremium: W.length > 0,
                    children: (function (e, t) {
                        if (null == e) return null;
                        let n = [],
                            { application: i, integration: s, webhooks: a } = e;
                        return (
                            eg(i, s) &&
                                n.push({
                                    id: "bot",
                                    label: new eS.A(i.bot).isVerifiedBot()
                                        ? X.intl.string(X.t.xxcTGy)
                                        : X.intl.string(X.t.AOdOYr),
                                    icon: y.RobotIcon,
                                }),
                            a.length > 0 &&
                                n.push({
                                    id: "webhooks",
                                    label: X.intl.formatToPlainString(X.t["6HqDfT"], { count: a.length }),
                                    icon: S.WebhookIcon,
                                }),
                            t && n.push({ id: "commands", label: X.intl.string(X.t["0hKkS+"]), icon: M.SlashBoxIcon }),
                            (0, l.jsx)(eA.B, {
                                direction: "horizontal",
                                gap: 4,
                                children: (0, l.jsx)(tT.C, {
                                    label: X.intl.string(X.t.G8u3Jf),
                                    layout: "inline",
                                    items: n,
                                }),
                            })
                        );
                    })(h, B),
                }),
                G,
                _,
                v,
            ],
        });
    return b
        ? (0, l.jsx)(q.D, {
              onClick: () => {
                  (C && null != j && null != h && tw.A.dismissOverviewTooltip(j, h.integration), f?.());
              },
              children: (0, l.jsx)(E.Z, { editable: !0, className: P()(tL.Nr, tL.vk), children: U }),
          })
        : (0, l.jsx)(E.Z, { editable: !0, className: tL.Nr, children: U });
}
function tM(e) {
    let { channel: t, application: i, showApplicationImage: a, ...r } = e,
        o = (0, tE.N)(t),
        c = s.useCallback(
            () =>
                (0, N.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(243486), n.e(673380)]).then(n.bind(n, 106895));
                    return (n) => (0, l.jsx)(e, { ...n, channel: t, application: i });
                }),
            [i, t],
        ),
        d = a ? (i.getIconURL(48) ?? ec.vI["0"]) : void 0;
    return (0, l.jsx)(tR, { imageSrc: d, onButtonClick: c, details: null != o ? [{ text: o }] : void 0, ...r });
}
var t_ = n(577020);
function tP(e) {
    let { applicationId: t, channels: n } = e,
        i = (0, tj.h)(t);
    return 0 === n.length || null == i
        ? null
        : (0, l.jsxs)("div", {
              className: t_.kF,
              children: [
                  (0, l.jsxs)("div", {
                      className: t_.wx,
                      children: [
                          (0, l.jsx)(tC.A, { game: i, size: tC.M.XSMALL }),
                          (0, l.jsx)(c.D, { variant: "heading-sm/semibold", children: i?.name }),
                      ],
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          tM,
                          {
                              channel: e,
                              application: i,
                              name: (0, eM.m1)(e, eP.default, e_.A),
                              icon: (0, tN.gU)(e) ?? void 0,
                              iconWrapperClassName: t_.N3,
                              hasNextSection: !0,
                              trailing: (0, l.jsx)(tf.PencilIcon, { size: "xs" }),
                          },
                          e.id,
                      ),
                  ),
              ],
          });
}
function tG(e) {
    let { guild: t } = e,
        n = (0, tv.A)(t.id),
        i = r().groupBy(n, (e) => e.linkedLobby?.application_id),
        a = Object.keys(i);
    return (
        s.useEffect(() => {
            0 === n.length && u.A.setSection(ex.wLn.OVERVIEW);
        }, [n]),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(I.E, {
                    variant: "body-sm/normal",
                    children: X.intl.format(X.t["9gsSLu"], {
                        helpdeskArticle: f.A.getArticleURL(ex.MVz.LINKED_LOBBIES),
                    }),
                }),
                (0, l.jsx)(T.c, { className: t_.zN }),
                a.map((e) => (0, l.jsx)(tP, { applicationId: e, channels: i[e] }, e)),
            ],
        })
    );
}
var tW = n(62617);
function tD(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: r, height: o, className: c, style: d } = e,
        u = s.useMemo(
            () => (0, tW.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [r, o, d],
        );
    return (0, l.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/21f7110f79ffef19fffd9358370afbf23891b43abf872f3c8e77ccc59807b058.svg",
        className: (0, tW.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var tB = n(881636),
    tU = n(184940),
    tH = n(289873),
    tV = n(398590),
    tz = n(587895),
    tK = n(945810),
    tF = n(499466),
    tY = n(537129),
    tq = n(837057),
    tQ = n(310419),
    tZ = n(526132),
    tJ = n(95701),
    tX = n(417869),
    t$ = n(91871),
    t0 = n.n(t$),
    t2 = n(381616),
    t1 = n(488995),
    t8 = n(258576),
    t5 = n(638594);
function t3(e) {
    let { query: t, setQuery: n } = e,
        i = s.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, l.jsx)("div", {
        className: t5.MT,
        children: (0, l.jsx)(H.I, {
            query: t,
            onChange: i,
            onClear: function () {
                return n("");
            },
            placeholder: X.intl.string(X.t["5prvKe"]),
            "aria-label": X.intl.string(X.t["5prvKe"]),
        }),
    });
}
function t6(e) {
    var t, n, i, a, r;
    let d,
        u,
        h,
        x,
        A,
        b,
        j,
        v,
        y,
        k,
        O,
        w,
        L,
        R,
        M,
        {
            guild: _,
            channel: P,
            applicationIntegrations: G,
            builtInIntegrations: W,
            customWebhooks: D,
            followedChannelWebhooks: B,
            isLoadingWebhooks: U,
            canCreateWebhook: H,
            onManageBuiltIn: V,
            onManageCustomWebhooks: z,
            onManageFollowedChannels: K,
            onManageApplication: F,
            onManageLobbiesLinked: Y,
        } = e,
        q = (0, tA.Ay)(),
        [Q, Z] = s.useState(""),
        { isFetchingConnections: J, accounts: $ } = (0, o.cf)(
            [tX.A],
            () => ({ isFetchingConnections: tX.A.isFetching(), accounts: tX.A.getAccounts() }),
            [],
        ),
        { canManageWebhooks: ee, canManageGuild: et } = (0, o.cf)(
            [p.A],
            () => ({
                canManageWebhooks:
                    (null != _ && p.A.can(ex.xBc.MANAGE_WEBHOOKS, _)) ||
                    (null != P && p.A.can(ex.xBc.MANAGE_WEBHOOKS, P)),
                canManageGuild: null != _ && null == P && p.A.can(ex.xBc.MANAGE_GUILD, _),
            }),
            [_, P],
        ),
        en = (0, tZ.e)(P),
        ei = (0, tj.h)(P?.linkedLobby?.application_id),
        el = (0, tv.A)(_?.id),
        {
            availableTwitchIntegrations: es,
            availableYoutubeIntegrations: ea,
            guildTwitchIntegrations: er,
            guildYoutubeIntegrations: eo,
        } = s.useMemo(
            () => ({
                availableTwitchIntegrations: W.twitch?.length ?? 0,
                availableYoutubeIntegrations: W.youtube?.length ?? 0,
                guildTwitchIntegrations: W.twitch?.filter((e) => e.enabled).length ?? 0,
                guildYoutubeIntegrations: W.youtube?.filter((e) => e.enabled).length ?? 0,
            }),
            [W.twitch, W.youtube],
        ),
        { showTwitchCard: em, showYoutubeCard: eg } = s.useMemo(() => {
            if (J || !et) return { showTwitchCard: !1, showYoutubeCard: !1 };
            let e = _?.features.has(ex.GuildFeatures.COMMUNITY),
                t = $.filter((e) => e.type === ex.fg2.TWITCH).length > 0,
                n = $.filter((e) => e.type === ex.fg2.YOUTUBE).length > 0;
            return { showTwitchCard: es > 0 || (!t && e), showYoutubeCard: ea > 0 || (!n && e) };
        }, [J, et, _, $, es, ea]),
        eh = Object.values(G).length,
        eA =
            ((t = _?.id),
            (d = (et ? Object.keys(G) : []).join(",")),
            (u = (0, o.bG)([tK.Bt], () => null != t && (0, tF.cx)(t, "ConjureServerApplicationIds"), [t])),
            s.useEffect(() => {
                if (u && "" !== d) for (let e of d.split(",")) (0, tY.A)(e);
            }, [u, d]),
            (0, o.yK)(
                [tz.A],
                () =>
                    u && "" !== d ? d.split(",").filter((e) => tz.A.getApplication(e)?.conjureProjectId != null) : [],
                [u, d],
            )),
        ep = eA.length,
        eb = s.useMemo(() => {
            var e;
            let t;
            return (
                (e = Object.values(G)),
                "" === (t = Q.trim().toLowerCase())
                    ? [...e]
                    : e.filter((e) => {
                          let { application: n } = e;
                          return (
                              n.id === t ||
                              t0()(t, n.name.toLowerCase()) ||
                              (null != n.bot && t0()(t, n.bot.username.toLowerCase()))
                          );
                      })
            );
        }, [G, Q]),
        ef = (0, o.bG)(
            [t2.A],
            () => {
                if (null != _) return eb.find((e) => t2.A.canShowOverviewTooltip(_.id, e.integration.id));
            },
            [eb, _],
        ),
        ej = s.useMemo(
            () => (void 0 !== ef ? [ef, ...eb.filter((e) => e.integration.id !== ef.integration.id)] : eb),
            [eb, ef],
        ),
        eN = (0, N.re)(N.DX),
        [eC, ev] = s.useState(!1),
        eE = s.useRef(0);
    function eI() {
        (ev(!0),
            clearTimeout(eE.current),
            (eE.current = setTimeout(() => {
                ev(!1);
            }, 200)));
    }
    function eT(e) {
        return e.map((e) => {
            let t = !eN && e.integration.id === ef?.integration.id;
            return (function (e, t, n, i, s) {
                let a,
                    { application: r, integration: o } = t,
                    c = [
                        {
                            icon: C.ClockIcon,
                            text:
                                ((a = ed.default.extractTimestamp(o.id)),
                                null != o.user
                                    ? X.intl.formatToPlainString(X.t.Nu9sat, {
                                          timestamp: a,
                                          user: eu.Ay.getUserTag(o.user),
                                      })
                                    : X.intl.formatToPlainString(X.t.gcdJ8J, { timestamp: a })),
                        },
                    ];
                return (0, l.jsx)(
                    tR,
                    {
                        name: r.name,
                        imageSrc: ec.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 48 }),
                        integration: t,
                        buttonText: X.intl.string(X.t["Z/qRnM"]),
                        hasNextSection: !0,
                        onButtonClick: () => {
                            (n(r.id),
                                tO.default.track(ex.HAw.APP_MANAGE_CTA_CLICKED, {
                                    application_id: r.id,
                                    guild_id: e?.id,
                                    is_admin: null != e ? p.A.can(ex.xBc.ADMINISTRATOR, e) : void 0,
                                }));
                        },
                        details: c,
                        guildId: e?.id,
                        isScrolling: i,
                        canShowMigrationTooltip: s,
                    },
                    `integration-${o.id}`,
                );
            })(_, e, F, eC, t);
        });
    }
    function ey(e) {
        let { application: t } = e;
        return eA.includes(t.id);
    }
    s.useEffect(() => (window.addEventListener("scroll", eI, !0), () => window.removeEventListener("scroll", eI)));
    let eS = eT(ej.filter(ey)),
        ek = eT(ej.filter((e) => !ey(e))),
        eO = ek;
    0 === ek.length &&
        et &&
        ((n = _?.id),
        (h = (0, tx.M)(q) ? "/assets/35c8990288849b40.svg" : "/assets/9d2bd46b521600c7.svg"),
        (x = (0, l.jsxs)(g.A, {
            direction: g.A.Direction.VERTICAL,
            align: g.A.Align.CENTER,
            className: t5.Kl,
            children: [
                (0, l.jsx)("img", { alt: "", src: h, className: t5.s1 }),
                (0, l.jsx)(E.Z, {
                    editable: !0,
                    className: t5.$N,
                    children: (0, l.jsx)(I.E, {
                        color: "text-muted",
                        variant: "body-sm/normal",
                        children: X.intl.string(X.t.EVWFNr),
                    }),
                }),
            ],
        })),
        (A = (0, l.jsx)(E.Z, {
            editable: !0,
            className: t5.$N,
            children: (0, l.jsxs)("div", {
                className: t5.q6,
                children: [
                    (0, l.jsx)(tD, { alt: "", ariaHidden: !0, height: 140, className: t5.QT }),
                    (0, l.jsx)(c.D, {
                        color: "text-default",
                        variant: "heading-xl/semibold",
                        children: X.intl.string(X.t.nQQeFM),
                    }),
                    (0, l.jsx)(I.E, {
                        color: "text-default",
                        variant: "body-sm/normal",
                        children: X.intl.format(X.t.snvKU3, {
                            handleGoToAppDirectory: function () {
                                ((0, tq.transitionToGlobalDiscovery)({
                                    tab: t1.GlobalDiscoveryTab.APPS,
                                    newSessionState: {
                                        entrypoint: { name: tQ.sW.GUILD_INTEGRATION_SETTINGS },
                                        guildId: n,
                                    },
                                }),
                                    (0, tV.jH)());
                            },
                        }),
                    }),
                ],
            }),
        })),
        (eO = eh > 0 ? x : A));
    let ew = ek.length > 0 || 0 === eS.length,
        eL = eh > 4 ? (0, l.jsx)(t3, { query: Q, setQuery: Z }) : null,
        eR = f.A.getArticleURL(ex.MVz.INTEGRATIONS),
        eM = null != P ? X.t.YV0vh6 : X.t.FnZEJs,
        e_ = [];
    if (ee) {
        let e, t, n, s, r;
        (e_.push(
            ((i = D.length),
            i > 0 ? (t = (0, l.jsx)(tB.ChevronLargeRightIcon, { size: "xs" })) : (e = X.intl.string(X.t.lOQqJK)),
            (0, l.jsx)(
                tR,
                {
                    name: X.intl.string(X.t.xOg4SP),
                    icon: S.WebhookIcon,
                    buttonText: e,
                    buttonDisabled: !H,
                    trailing: t,
                    onButtonClick: z,
                    hasNextSection: i > 0,
                    details: [{ text: X.intl.formatToPlainString(X.t["6HqDfT"], { count: i }) }],
                },
                "webhooks",
            )),
        ),
            (null == P || tJ.XD.has(P.type) || B.length > 0) &&
                e_.push(
                    ((a = B.length),
                    a > 0
                        ? ((r = (0, l.jsx)(tB.ChevronLargeRightIcon, { size: "xs" })), (s = K))
                        : ((n = X.intl.string(X.t["ZwSt+T"])),
                          (s = () => open(f.A.getArticleURL(ex.MVz.CHANNEL_FOLLOWING)))),
                    (0, l.jsx)(
                        tR,
                        {
                            name: X.intl.string(X.t.OrV60r),
                            icon: tU.ChannelsFollowedIcon,
                            buttonText: n,
                            onButtonClick: s,
                            trailing: r,
                            hasNextSection: a > 0,
                            details: [{ text: X.intl.formatToPlainString(X.t.JUNGIZ, { count: a }) }],
                        },
                        "channels-followed",
                    )),
                ));
    }
    (null == P &&
        el.length > 0 &&
        e_.push(
            ((r = el.length),
            (0, l.jsx)(
                tR,
                {
                    name: X.intl.string(X.t.tqtDXC),
                    icon: ts.RefreshIcon,
                    trailing: (0, l.jsx)(tB.ChevronLargeRightIcon, { size: "xs" }),
                    onButtonClick: Y,
                    hasNextSection: !0,
                    details: [{ text: X.intl.formatToPlainString(X.t["puxS4+"], { count: r }) }],
                },
                "channels-syncing",
            )),
        ),
        em &&
            e_.push(
                ((k = e9.A.get(ex.fg2.TWITCH)),
                es > 0
                    ? ((y = (0, l.jsx)(tB.ChevronLargeRightIcon, { size: "xs" })),
                      (j = X.intl.formatToPlainString(X.t.FFpnT8, { count: er })),
                      (v = () => V(ex.fg2.TWITCH)))
                    : ((b = X.intl.string(X.t.bkvGkn)),
                      (j = X.intl.string(X.t.Qq3X2M)),
                      (v = () => (0, m.A)({ platformType: ex.fg2.TWITCH, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tR,
                    {
                        name: X.intl.string(X.t.q4pBG3),
                        icon: k.icon.whiteSVG,
                        iconBackgroundColor: k.color,
                        iconClassName: t5.tV,
                        buttonText: b,
                        onButtonClick: v,
                        trailing: y,
                        hasNextSection: es > 0,
                        details: [{ text: j }],
                    },
                    "integrations-twitch",
                )),
            ),
        eg &&
            e_.push(
                ((M = e9.A.get(ex.fg2.YOUTUBE)),
                ea > 0
                    ? ((R = (0, l.jsx)(tB.ChevronLargeRightIcon, { size: "xs" })),
                      (w = X.intl.formatToPlainString(X.t.b2g5vC, { count: eo })),
                      (L = () => V(ex.fg2.YOUTUBE)))
                    : ((O = X.intl.string(X.t.xEyQ3X)),
                      (w = X.intl.string(X.t.T0ivgQ)),
                      (L = () => (0, m.A)({ platformType: ex.fg2.YOUTUBE, location: "Integration Settings" }))),
                (0, l.jsx)(
                    tR,
                    {
                        name: X.intl.string(X.t.aS6cK4),
                        icon: M.icon.whiteSVG,
                        iconBackgroundColor: M.color,
                        iconClassName: t5.tV,
                        buttonText: O,
                        onButtonClick: L,
                        trailing: R,
                        hasNextSection: ea > 0,
                        details: [{ text: w }],
                    },
                    "integrations-youtube",
                )),
            ));
    let eP = null != P && en && null != ei;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.E, { variant: "body-sm/normal", children: X.intl.format(eM, { helpdeskArticle: eR }) }),
            (0, l.jsx)(T.c, { className: t5.yF }),
            U || J || null == _
                ? (0, l.jsx)(tH.y, { className: t5.__invalid_spinner, type: tH.y.Type.SPINNING_CIRCLE })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          e_,
                          eP &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      e_.length > 0 ? (0, l.jsx)(T.c, { className: t5.yF }) : null,
                                      (0, l.jsx)(c.D, {
                                          variant: "heading-sm/semibold",
                                          className: t5.bV,
                                          children: X.intl.string(X.t.oAvIAg),
                                      }),
                                      (0, l.jsx)(tM, {
                                          channel: P,
                                          application: ei,
                                          showApplicationImage: !0,
                                          name: ei.name,
                                          hasNextSection: !0,
                                          iconClassName: t5.d0,
                                          trailing: (0, l.jsx)(tf.PencilIcon, { size: "xs" }),
                                      }),
                                  ],
                              }),
                          et
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        e_.length > 0 || eP ? (0, l.jsx)(T.c, { className: t5.yF }) : null,
                                        ep > 0 ? eL : null,
                                        ew
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(c.D, {
                                                          variant: "heading-sm/semibold",
                                                          className: t5.bV,
                                                          children: X.intl.string(X.t.pUBKht),
                                                      }),
                                                      ep > 0 ? null : eL,
                                                      eO,
                                                  ],
                                              })
                                            : null,
                                        eS.length > 0
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      ew ? (0, l.jsx)(T.c, { className: t5.yF }) : null,
                                                      (0, l.jsx)(c.D, {
                                                          variant: "heading-sm/semibold",
                                                          className: t5.bV,
                                                          children: X.intl.string(t8.default.EPSYTs),
                                                      }),
                                                      eS,
                                                  ],
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                      ],
                  }),
        ],
    });
}
var t9 = n(964486),
    t7 = n(580807);
function t4(e) {
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
    let A = s.useCallback(async () => {
        if (m() && null !== t) {
            let e = await eH.A.create(n.id, t.id);
            null != e && x(e);
        }
    }, [m, t, n]);
    (0, t9.Ay)(() => {
        0 === a.length && A();
    });
    let p = null !== t;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(I.E, {
                variant: "body-sm/normal",
                children: X.intl.format(X.t.WL0d0e, {
                    helpdeskArticle: f.A.getArticleURL(ex.MVz.WEBHOOKS),
                    developersArticle: ex.X7G.API_DOCS_WEBHOOKS,
                }),
            }),
            (0, l.jsx)(T.c, { className: t7.zN }),
            a.length > 0
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t7.Tf,
                              children: (0, l.jsx)(k.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: X.intl.string(X.t["nrO/HH"]),
                                  disabled: !p,
                                  onClick: A,
                              }),
                          }),
                          (0, l.jsx)(e8, {
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
                          (0, l.jsx)(c.D, { variant: "heading-sm/semibold", children: X.intl.string(X.t.LzmsWl) }),
                          (0, l.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: t7.nM,
                              children: (0, l.jsx)(k.$, {
                                  variant: "primary",
                                  text: X.intl.string(X.t.lOQqJK),
                                  disabled: !p,
                                  onClick: A,
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
n(46121);
var ne = n(494192);
function nt(e, t) {
    switch (e) {
        case ex.wLn.APPLICATION:
            return t?.application.name ?? "";
        case ex.wLn.OVERVIEW:
            return X.intl.string(X.t.s69NLF);
        case ex.wLn.CHANNEL_FOLLOWING:
            return X.intl.string(X.t.OrV60r);
        case ex.wLn.TWITCH:
            return X.intl.string(X.t.q4pBG3);
        case ex.wLn.WEBHOOKS:
            return X.intl.string(X.t.xOg4SP);
        case ex.wLn.YOUTUBE:
            return X.intl.string(X.t.aS6cK4);
        case ex.wLn.LOBBIES_LINKED:
            return X.intl.string(X.t.tqtDXC);
        default:
            return "";
    }
}
let nn = s.memo(function (e) {
    let {
            section: t,
            sectionId: n,
            guild: i,
            channel: a,
            integrations: j,
            editedIntegration: N,
            webhooks: C,
            editedWebhook: v,
            isFetchingWebhooks: E,
            refToScroller: I,
            errors: T,
            hasChanges: y,
        } = e,
        S = (0, o.bG)([A.A], () => (null != i ? A.A.getDefaultChannel(i.id) : null)),
        k = (0, o.cf)([A.A], () => A.A.getChannels(i?.id)),
        O = (0, o.cf)([p.A], () =>
            r().keyBy(
                k.SELECTABLE.map((e) => e.channel).filter((e) => p.A.can(ex.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        w = (0, o.cf)([p.A], () =>
            r().keyBy(
                k.VOCAL.map((e) => e.channel).filter((e) => e.isGuildVocal() && p.A.can(ex.xBc.MANAGE_WEBHOOKS, e)),
                "id",
            ),
        ),
        L = a ?? S,
        R = t === ex.wLn.APPLICATION ? n : null,
        [M, _] = s.useState(1.4),
        P = s.useCallback(
            () =>
                y()
                    ? (b._.dispatch(ex.jej.SHAKE_APP, { duration: 300, intensity: M }),
                      _(Math.min(M + 2, 15)),
                      b._.dispatch(ex.jej.EMPHASIZE_NOTICE),
                      !1)
                    : (_(1.4), !0),
            [y, M],
        ),
        G = s.useCallback((e) => !!P() && (u.A.setSection(e), !0), [P]),
        {
            applicationIntegrations: W,
            applicationBotIds: D,
            builtInIntegrations: B,
            customWebhooks: U,
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
            for (let t of C)
                (t.channel_id in O || t.channel_id in w) &&
                    (null != t.application_id && t.application_id in e
                        ? e[t.application_id].webhooks.push(t)
                        : t.type === ex.NH1.CHANNEL_FOLLOWER
                          ? l.push(t)
                          : i.push(t));
            return {
                applicationIntegrations: e,
                applicationBotIds: t,
                builtInIntegrations: n,
                customWebhooks: i,
                followedChannelWebhooks: l,
            };
        }, [j, O, w, C]);
    (s.useEffect(() => {
        if (!E)
            switch (t) {
                case ex.wLn.TWITCH:
                    null == B[ex.fg2.TWITCH] && u.A.setSection(ex.wLn.OVERVIEW);
                    break;
                case ex.wLn.YOUTUBE:
                    null == B[ex.fg2.YOUTUBE] && u.A.setSection(ex.wLn.OVERVIEW);
                    break;
                case ex.wLn.APPLICATION:
                    (null != R && (R in D || R in W)) || u.A.setSection(ex.wLn.OVERVIEW);
            }
    }, [W, D, B, R, t, E]),
        s.useEffect(() => {
            i?.id == null || (x.A.getEntitlementsForGuildFetchState(i.id) === x.e.NOT_FETCHED && h.f5(i.id));
        }, [i?.id]),
        s.useEffect(
            () => () => {
                u.A.setSection(ex.wLn.OVERVIEW, null);
            },
            [],
        ));
    let V = null;
    switch (t) {
        case ex.wLn.TWITCH:
            null != B[ex.fg2.TWITCH] &&
                (V = (0, l.jsx)(th, {
                    guild: i,
                    integrations: B[ex.fg2.TWITCH],
                    editedIntegration: N,
                    labelText: X.intl.string(X.t.q4pBG3),
                    platformType: ex.fg2.TWITCH,
                    descriptionText: X.intl.string(X.t.V9kNqt),
                    helpText: X.intl.format(X.t.ro1jEN, {
                        connectAction: () =>
                            (0, m.A)({ platformType: ex.fg2.TWITCH, location: "Integration Settings" }),
                        helpdeskArticle: f.A.getArticleURL(ex.MVz.TWITCH_INTEGRATION),
                    }),
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case ex.wLn.YOUTUBE:
            null != B[ex.fg2.YOUTUBE] &&
                (V = (0, l.jsx)(th, {
                    guild: i,
                    integrations: B[ex.fg2.YOUTUBE],
                    editedIntegration: N,
                    labelText: X.intl.string(X.t.aS6cK4),
                    platformType: ex.fg2.YOUTUBE,
                    descriptionText: X.intl.string(X.t["7Tv7JK"]),
                    helpText: X.intl.format(X.t["4OSAQ9"], {
                        connectAction: () => (0, m.A)({ platformType: ex.fg2.YOUTUBE }),
                        helpdeskArticle: f.A.getArticleURL(ex.MVz.YOUTUBE_INTEGRATION),
                    }),
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case ex.wLn.APPLICATION:
            let z = null != R ? (W[D[R]] ?? W[R]) : null;
            null != z &&
                (V = (0, l.jsx)(e6, {
                    guild: i,
                    applicationIntegration: z,
                    editedWebhook: v,
                    selectableWebhookChannels: { ...O, ...w },
                    errors: T,
                    canNavigate: P,
                }));
            break;
        case ex.wLn.CHANNEL_FOLLOWING:
            V = (0, l.jsx)(tb, {
                followedChannelWebhooks: H,
                editedWebhook: v,
                selectableWebhookChannels: O,
                canNavigate: P,
                errors: T,
            });
            break;
        case ex.wLn.WEBHOOKS:
            V = (0, l.jsx)(t4, {
                guild: i,
                channel: a,
                customWebhooks: U,
                editedWebhook: v,
                selectableWebhookChannels: { ...O, ...w },
                canNavigate: P,
                refToScroller: I,
                errors: T,
            });
            break;
        case ex.wLn.LOBBIES_LINKED:
            V = (0, l.jsx)(tG, { guild: i });
            break;
        default:
            V = (0, l.jsx)(t6, {
                guild: i,
                channel: a,
                applicationIntegrations: W,
                builtInIntegrations: B,
                customWebhooks: U,
                followedChannelWebhooks: H,
                isLoadingWebhooks: E || null == i,
                canCreateWebhook: null != L,
                onManageCustomWebhooks: () => {
                    u.A.setSection(ex.wLn.WEBHOOKS);
                },
                onManageFollowedChannels: () => {
                    u.A.setSection(ex.wLn.CHANNEL_FOLLOWING);
                },
                onManageApplication: (e) => {
                    u.A.setSection(ex.wLn.APPLICATION, e);
                },
                onManageBuiltIn: (e) => {
                    switch (e) {
                        case ex.fg2.TWITCH:
                            u.A.setSection(ex.wLn.TWITCH);
                            break;
                        case ex.fg2.YOUTUBE:
                            u.A.setSection(ex.wLn.YOUTUBE);
                    }
                },
                onManageLobbiesLinked: () => {
                    u.A.setSection(ex.wLn.LOBBIES_LINKED);
                },
            });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.A, {
                align: g.A.Align.CENTER,
                className: ne.jD,
                children:
                    t === ex.wLn.OVERVIEW
                        ? (0, l.jsx)(c.D, { variant: "heading-lg/semibold", children: nt(ex.wLn.OVERVIEW) })
                        : (0, l.jsx)(d.A, {
                              activeId: t.toString(),
                              breadcrumbs: [ex.wLn.OVERVIEW, t].map((e) => ({ id: e.toString(), label: nt(e, W[R]) })),
                              onBreadcrumbClick: (e) => {
                                  t !== parseInt(e.id) && G(parseInt(e.id));
                              },
                              renderCustomBreadcrumb: (e, t) =>
                                  (0, l.jsx)(c.D, {
                                      variant: "heading-lg/semibold",
                                      className: t ? ne.q3 : ne.fd,
                                      children: e.label,
                                  }),
                          }),
            }),
            V,
        ],
    });
});
