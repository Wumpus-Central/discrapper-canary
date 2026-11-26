n.d(t, { A: () => eo });
var i = n(477900),
    l = n(582128),
    s = n(192308),
    a = n(683071),
    r = n(885574),
    o = n(821609),
    c = n(866665),
    d = n(631223),
    u = n(435558),
    m = n.n(u),
    g = n(136722),
    h = n(855986),
    x = n(392054),
    A = n(168186),
    p = n(696451),
    b = n(71393),
    f = n(576705),
    j = n(495273),
    N = n(317525),
    C = n(792996);
function v(e, t) {
    return (0, j.N8)(e, t) ? "@everyone" : (N.A.getRole(e, t)?.name ?? "role");
}
var E = n(542580),
    I = n(803378),
    T = n(652215);
n(73510);
var y = n(284009),
    S = n.n(y),
    k = n(43105),
    O = n(834730),
    w = n(939249),
    L = n(241326),
    R = n(149468),
    M = n(320426),
    _ = n(381616),
    P = n(129230),
    G = n(53656);
n(172879);
var W = n(778858),
    D = n(46653),
    B = n(287809),
    U = n(562153),
    H = n(661191),
    V = n(200662),
    z = n(523388),
    K = n(503698),
    F = n.n(K),
    Y = n(785007),
    q = n(933832),
    Q = n(789645),
    Z = n(719325);
let J = [!1, !0];
function X(e) {
    let { isDisabled: t, currentValue: n, onChange: s } = e,
        { ref: a, ...r } = (0, Y._u)({ orientation: "horizontal", isDisabled: t }),
        o = l.useCallback(
            (e) => {
                t || e === n || s(e);
            },
            [t, n, s],
        );
    return (0, i.jsx)("div", {
        className: F()(Z.Os, { [Z.r9]: t }),
        ref: a,
        ...r,
        children: J.map((e) => (0, i.jsx)($, { isSelected: n === e, itemValue: e, onClick: () => o(e) }, e.toString())),
    });
}
function $(e) {
    let { isSelected: t, itemValue: n, onClick: l } = e,
        s = n ? Z.cw : Z.Xg,
        a = n ? q.CheckmarkLargeIcon : Q.XSmallIcon,
        r = n ? C.intl.string(C.t.RzDfSk) : C.intl.string(C.t["6639O5"]),
        o = (0, Y.Gx)({ isSelected: t, label: r });
    return (0, i.jsx)(w.D, {
        className: F()(Z.AS, s, { [Z.wH]: t }),
        onClick: l,
        ...o,
        children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
    });
}
var ee = n(759897);
function et(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: s,
            noneSelectedText: a,
            overwrites: r,
            hasAccessToMutatePermissions: o,
        } = e,
        c = (0, h.bG)([b.A], () => b.A.getGuild(s));
    S()(null != c, "");
    let {
            sortedOverwrites: d,
            onRemove: u,
            onChange: m,
        } = (function (e, t, n) {
            let i = (0, h.bG)([N.A], () => N.A.getSortedRoles(e)),
                [s, a] = l.useState(new Set()),
                r = l.useMemo(() => {
                    let n = (0, A.Ap)(e),
                        l = i.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
                    return Object.values(t)
                        .filter((e) => e.canRead)
                        .sort((t, i) => {
                            let s = t.type - i.type;
                            if (0 !== s) return s;
                            switch (t.type) {
                                case x.RA.USER:
                                    return (function (e, t, n) {
                                        let i = Number(e.canWrite) - Number(t.canWrite);
                                        if (0 !== i) return i;
                                        let l = B.default.getUser(e.id),
                                            s = B.default.getUser(t.id);
                                        if (null != l && null != s) {
                                            let e = U.Ay.getName(n, void 0, l),
                                                t = U.Ay.getName(n, void 0, s);
                                            return e?.localeCompare(t);
                                        }
                                        return H.default.compare(e.id, t.id);
                                    })(t, i, e);
                                case x.RA.ROLE:
                                    if (t.id === e) return -1;
                                    if (i.id === e) return 1;
                                    return l[t.id] > l[i.id] ? -1 : 1;
                                case x.RA.CHANNEL:
                                    if (t.id === n) return -1;
                                    if (i.id === n) return 1;
                                    let a = Number(t.canWrite) - Number(i.canWrite);
                                    return 0 !== a ? a : H.default.compare(t.id, i.id);
                            }
                        });
                }, [e, t, i]),
                o = l.useCallback(
                    (e) => {
                        n({}, [(0, V.Eu)(e.id, e.type)]);
                    },
                    [n],
                ),
                c = l.useCallback(
                    (e, i) => {
                        let l = (0, V.Eu)(e.id, e.type);
                        null != t[l] && n({ [l]: { id: e.id, permission: i, type: e.type } }, []);
                    },
                    [n, t],
                );
            return (
                l.useEffect(() => {
                    let n = Object.values(t)
                        .filter((e) => e.type === x.RA.USER && !e.canRead && !s.has(e.id))
                        .map((e) => e.id);
                    0 !== n.length && (W.A.requestMembersById(e, n, !1), a((e) => new Set([...e, ...n])));
                }, [e, t, s, a]),
                { sortedOverwrites: r, onRemove: o, onChange: c }
            );
        })(s, r, n),
        g = (0, h.bG)([I.A], () => I.A.getApplicationId()),
        p = (0, h.bG)([G.default], () =>
            null == g ? void 0 : G.default.integrations.find((e) => e.application?.id === g),
        ),
        f = (0, h.bG)([_.A], () => void 0 !== p && _.A.canShowToggleTooltip(p.id));
    return d.length > 0
        ? d.map((e) =>
              (0, i.jsx)(
                  en,
                  {
                      guild: c,
                      commandId: t,
                      onChange: (t) => m(e, t),
                      onRemove: () => u(e),
                      overwrite: e,
                      integration: p,
                      canShowMigrationTooltip: f,
                      hasAccessToMutatePermissions: o,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: ee.dh,
              children: (0, i.jsx)(O.E, { color: "text-muted", variant: "body-sm/normal", children: a }),
          });
}
function en(e) {
    let {
            guild: t,
            commandId: n,
            onChange: s,
            onRemove: a,
            overwrite: r,
            integration: o,
            canShowMigrationTooltip: d,
            hasAccessToMutatePermissions: u,
        } = e,
        m = o?.application?.bot?.username,
        {
            isRemovable: g,
            isUpdateRestricted: h,
            lockReason: p,
        } = (function (e) {
            let t,
                { overwrite: n, guildId: i, commandId: l, hasAccessToMutatePermissions: s } = e,
                a = n.id === i || n.id === (0, A.Ap)(i),
                r = !n.canWrite || !s;
            return (
                s
                    ? n.canWrite ||
                      (n.type === x.RA.USER
                          ? (t = n.id === D.default.getId() ? C.intl.string(C.t["1VF/0x"]) : C.intl.string(C.t.P1GnEd))
                          : n.type === x.RA.ROLE && (t = C.intl.string(C.t.mcAijf)))
                    : (t = null != l ? C.intl.string(C.t.tybdas) : C.intl.string(C.t["z2hjk/"])),
                { isRemovable: s && (null != l || !a), isUpdateRestricted: r, lockReason: t }
            );
        })({ overwrite: r, guildId: t.id, commandId: n, hasAccessToMutatePermissions: u }),
        b = d && null != o && r.id === t.id && void 0 !== m && !r.permission;
    l.useEffect(() => {
        b &&
            P.default.track(T.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, R.H$)(t.id),
                application_id: o?.application?.id,
                location: "toggle",
            });
    }, [t.id, o?.application?.id, b]);
    let f = l.useRef(null),
        j = (0, i.jsx)(c.m, {
            text: p,
            shouldShow: h,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: f,
                children: (0, i.jsx)(X, {
                    isDisabled: h,
                    currentValue: r.permission,
                    onChange: b
                        ? (e) => {
                              (M.A.dismissToggleTooltip(t.id, o), s(e));
                          }
                        : s,
                }),
            }),
        }),
        N = (0, i.jsx)(k.A, {
            targetElementRef: f,
            title: C.intl.string(C.t.ufFDiC),
            body: C.intl.format(C.t.pW4Crz, {
                botName: m,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                M.A.dismissToggleTooltip(t.id, o);
            },
        });
    return (0, i.jsxs)(
        "div",
        {
            className: ee.Wk,
            children: [
                (0, i.jsx)("div", {
                    className: ee.MB,
                    children: (0, i.jsx)(z.A, { guild: t, id: r.id, type: r.type, isLocked: h, lockTooltipText: p }),
                }),
                (0, i.jsxs)("div", {
                    className: ee.ev,
                    children: [
                        g
                            ? (0, i.jsx)("div", {
                                  className: ee.ys,
                                  children: (0, i.jsx)(w.D, {
                                      className: ee.od,
                                      "aria-label": C.intl.string(C.t.mT0CQM),
                                      onClick: a,
                                      children: (0, i.jsx)(L.TrashIcon, {
                                          size: "md",
                                          color: "currentColor",
                                          className: ee.Yz,
                                      }),
                                  }),
                              })
                            : null,
                        j,
                        b && N,
                    ],
                }),
            ],
        },
        r.id,
    );
}
var ei = n(157559),
    el = n(975571);
function es(e, t) {
    ei.A.show({
        title: C.intl.string(C.t.vElC9b),
        body: (function (e, t) {
            switch (e) {
                case 0:
                    return C.intl.format(C.t["/S6f5y"], {});
                case 1:
                    return C.intl.format(C.t.EBhv4R, { name: t });
                case 2:
                    return C.intl.format(C.t["59Dbw0"], { name: t });
            }
        })(e, t),
        cancelText: C.intl.string(C.t.psXQHP),
        onCancel() {
            window.open(el.A.getArticleURL(T.MVz.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT));
        },
    });
}
var ea = n(636547),
    er = n(160253);
function eo(e) {
    let {
            applicationId: t,
            commandId: u,
            guildId: j,
            inModal: N,
            editedTargetPermissions: y,
            originalApplicationPermissions: S,
            originalCommandPermissions: k,
            selectedPermissionCount: O,
        } = e,
        {
            channels: w,
            membersAndRoles: L,
            editPermissions: R,
            hasAccessToMutatePermissions: M,
            overwritesOverLimit: _,
            maximumPermissionsSelected: P,
            addDisabledReason: G,
            defaultMemberPermissions: W,
        } = (function (e) {
            let {
                    applicationId: t,
                    commandId: n,
                    guildId: i,
                    editedTargetPermissions: s,
                    originalApplicationPermissions: a,
                    originalCommandPermissions: r,
                    selectedPermissionCount: o,
                    onLockout: c,
                } = e,
                d = (0, h.bG)([I.A], () => (null == n ? null : I.A.getCommand(n)), [n]),
                u = (0, h.bG)(
                    [b.A, p.Ay, f.A],
                    () => {
                        let e = b.A.getGuild(i),
                            t = p.Ay.getSelfMember(i);
                        return (
                            null != e &&
                            null != t &&
                            (0, A.zl)({
                                PermissionStore: f.A,
                                guild: e,
                                selfMember: t,
                                applicationLevelPermissions: a,
                                commandLevelPermissions: r,
                                defaultMemberPermissions: d?.defaultMemberPermissions,
                            })
                        );
                    },
                    [i, d, a, r],
                ),
                j = n ?? t,
                [N, y] = l.useMemo(() => {
                    let e = {},
                        t = {};
                    for (let [n, i] of Object.entries(s)) i.type === x.RA.CHANNEL ? (e[n] = i) : (t[n] = i);
                    return [e, t];
                }, [s]),
                S = l.useCallback(
                    (e) => {
                        let t = b.A.getGuild(i),
                            l = p.Ay.getSelfMember(i);
                        return (
                            null != t &&
                            null != l &&
                            (null != n
                                ? (0, A.zl)({
                                      PermissionStore: f.A,
                                      guild: t,
                                      selfMember: l,
                                      applicationLevelPermissions: a,
                                      commandLevelPermissions: e,
                                      defaultMemberPermissions: d?.defaultMemberPermissions,
                                  })
                                : (0, A.zl)({
                                      PermissionStore: f.A,
                                      guild: t,
                                      selfMember: l,
                                      applicationLevelPermissions: e,
                                  }))
                        );
                    },
                    [i, d, n, a],
                ),
                k = l.useCallback(
                    (e, n) => {
                        let l = {};
                        for (let [e, t] of Object.entries(s))
                            l[e] = { id: t.id, permission: t.permission, type: t.type };
                        if (((l = Object.assign(l, e)), n.length > 0 && (l = m().omit(l, n)), !S(l))) {
                            let { action: t, name: l } = (function (e, t, n, i) {
                                if (0 !== i.length) {
                                    let n = t[i[0]];
                                    return n.type === x.RA.USER
                                        ? { action: 0, name: null }
                                        : { action: 1, name: v(e, n.id) };
                                }
                                return { action: 2, name: v(e, Object.values(n)[0].id) };
                            })(i, s, e, n);
                            c(t, l);
                            return;
                        }
                        E.T0(t, j, l);
                    },
                    [t, s, i, j, S, c],
                ),
                O = o - 100,
                w = O >= 0,
                L = null;
            u
                ? w && (L = C.intl.string(C.t["XTwtW/"]))
                : (L = null != n ? C.intl.string(C.t.tybdas) : C.intl.string(C.t["z2hjk/"]));
            let R = d?.defaultMemberPermissions ?? null;
            return (
                null != R && g.aI(R, A.Cq) && (R = T.xBc.ADMINISTRATOR),
                {
                    channels: N,
                    membersAndRoles: y,
                    editPermissions: k,
                    hasAccessToMutatePermissions: u,
                    overwritesOverLimit: O,
                    maximumPermissionsSelected: w,
                    addDisabledReason: L,
                    defaultMemberPermissions: R,
                }
            );
        })({
            applicationId: t,
            commandId: u,
            guildId: j,
            editedTargetPermissions: y,
            originalApplicationPermissions: S,
            originalCommandPermissions: k,
            selectedPermissionCount: O,
            onLockout: es,
        }),
        D = l.useCallback(() => {
            let e = Object.keys(w);
            return (0, s.mM)(async () => {
                let { default: t } = await Promise.all([n.e(377476), n.e(393654), n.e(692513), n.e(52532)]).then(
                    n.bind(n, 192991),
                );
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: R,
                        guildId: j,
                        headerText: C.intl.string(C.t["i1c+kV"]),
                        hasMemberSearch: !1,
                        overwrittenKeys: e,
                        search: d.HB,
                        searchPlaceholderText: C.intl.string(C.t["TLQo/i"]),
                        selectedPermissionCount: O,
                        ...n,
                    });
            });
        }, [R, w, j, O]),
        B = l.useCallback(() => {
            let e = Object.keys(L);
            return (0, s.mM)(async () => {
                let { default: t } = await Promise.all([n.e(377476), n.e(393654), n.e(692513), n.e(52532)]).then(
                    n.bind(n, 192991),
                );
                return (n) =>
                    (0, i.jsx)(t, {
                        editPermissions: R,
                        guildId: j,
                        hasMemberSearch: !0,
                        headerText: C.intl.string(C.t["56jRn8"]),
                        overwrittenKeys: e,
                        search: d.oR,
                        searchPlaceholderText: C.intl.string(C.t.wAfO5Y),
                        selectedPermissionCount: O,
                        ...n,
                    });
            });
        }, [R, j, L, O]),
        U = l.useCallback(() => {
            if (null != W)
                return (0, s.mM)(async () => {
                    let { default: e } = await n.e(529384).then(n.bind(n, 519387));
                    return (t) => (0, i.jsx)(e, { ...t, defaultMemberPermissions: W, guildId: j });
                });
        }, [W, j]),
        H = [
            {
                buttonClick: B,
                buttonText: C.intl.string(C.t["56jRn8"]),
                noneSelectedText: C.intl.string(C.t.C0rYfq),
                overwrites: L,
                title: null == u ? C.intl.string(C.t["vPWe++"]) : C.intl.string(C.t["1jLVGB"]),
            },
            {
                buttonClick: D,
                buttonText: C.intl.string(C.t["i1c+kV"]),
                noneSelectedText: C.intl.string(C.t["UBJhC/"]),
                overwrites: w,
                title: null == u ? C.intl.string(C.t.OGiMXJ) : C.intl.string(C.t.Ujbaqm),
            },
        ];
    return (0, i.jsxs)(l.Fragment, {
        children: [
            _ > 0
                ? (0, i.jsx)(a.w, {
                      type: "warning",
                      message: C.intl.format(C.t["B/dFBH"], { removeCount: _ }),
                      role: "status",
                  })
                : null,
            null != W
                ? (0, i.jsxs)("div", {
                      className: er.Yg,
                      children: [
                          (0, i.jsx)(r.CircleInformationIcon, { size: "sm", color: "currentColor", className: er.Kk }),
                          (0, i.jsx)("span", { className: er.iU, children: C.intl.format(C.t["2889Gq"], {}) }),
                          (0, i.jsx)(o.$, {
                              variant: "secondary",
                              size: "sm",
                              onClick: U,
                              text: C.intl.string(C.t["HO/oXl"]),
                          }),
                      ],
                  })
                : null,
            H.map((e, t) =>
                (0, i.jsx)(
                    ea.A,
                    {
                        bar: (0, i.jsx)(c.m, {
                            text: G,
                            shouldShow: null != G,
                            asContainer: !0,
                            children: (0, i.jsx)(o.$, {
                                variant: "secondary",
                                disabled: P || !M,
                                onClick: e.buttonClick,
                                size: "sm",
                                text: e.buttonText,
                            }),
                        }),
                        inModal: N,
                        title: e.title,
                        children: (0, i.jsx)("div", {
                            className: N ? void 0 : er.qI,
                            children: (0, i.jsx)(et, {
                                guildId: j,
                                commandId: u,
                                noneSelectedText: e.noneSelectedText,
                                overwrites: e.overwrites,
                                editPermissions: R,
                                hasAccessToMutatePermissions: M,
                            }),
                        }),
                    },
                    t,
                ),
            ),
        ],
    });
}
