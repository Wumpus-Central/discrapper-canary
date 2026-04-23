n.d(t, { A: () => R }), n(172879);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(311907),
    o = n(265486),
    d = n(990078),
    c = n(834730),
    u = n(939249),
    m = n(241326),
    g = n(686956),
    h = n(58149),
    x = n(392054),
    p = n(168186),
    A = n(320426),
    b = n(381616),
    f = n(961350),
    _ = n(317525),
    j = n(71393),
    N = n(287809),
    v = n(954571),
    E = n(562153),
    C = n(661191),
    I = n(53656),
    T = n(803378),
    S = n(200662),
    y = n(739174),
    w = n(738431),
    O = n(652215),
    k = n(985018),
    L = n(925836);
function R(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: s,
            noneSelectedText: o,
            overwrites: d,
            hasAccessToMutatePermissions: u,
        } = e,
        m = (0, r.bG)([j.A], () => j.A.getGuild(s));
    a()(null != m, "");
    let h = (0, r.bG)([_.A], () => _.A.getSortedRoles(s)),
        [A, f] = l.useState(new Set()),
        v = l.useMemo(() => {
            let e = (0, p.Ap)(s),
                t = h.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(d)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let l = n.type - i.type;
                    if (0 !== l) return l;
                    switch (n.type) {
                        case x.RA.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let l = N.default.getUser(e.id),
                                    s = N.default.getUser(t.id);
                                if (null != l && null != s) {
                                    let e = E.Ay.getName(n, void 0, l),
                                        t = E.Ay.getName(n, void 0, s);
                                    return e?.localeCompare(t);
                                }
                                return C.default.compare(e.id, t.id);
                            })(n, i, s);
                        case x.RA.ROLE:
                            if (n.id === s) return -1;
                            if (i.id === s) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case x.RA.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let a = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== a ? a : C.default.compare(n.id, i.id);
                    }
                });
        }, [s, d, h]),
        y = l.useCallback(
            (e, t) => {
                n({}, [(0, S.Eu)(e, t)]);
            },
            [n],
        ),
        w = l.useCallback(
            (e, t, i) => {
                let l = (0, S.Eu)(e, t);
                null != d[l] && n({ [l]: { id: e, permission: i, type: t } }, []);
            },
            [n, d],
        );
    l.useEffect(() => {
        let e = Object.values(d)
            .filter((e) => e.type === x.RA.USER && !e.canRead && !A.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (g.A.requestMembersById(s, e, !1), f((t) => new Set([...t, ...e])));
    }, [s, d, A, f]);
    let O = (0, r.bG)([T.A], () => T.A.getApplicationId()),
        k = (0, r.bG)([I.default], () =>
            null == O ? void 0 : I.default.integrations.find((e) => e.application?.id === O),
        ),
        R = (0, r.bG)([b.A], () => void 0 !== k && b.A.canShowToggleTooltip(k.id));
    return v.length > 0
        ? v.map((e) =>
              (0, i.jsx)(
                  M,
                  {
                      guild: m,
                      commandId: t,
                      onChange: (t) => w(e.id, e.type, t),
                      onRemove: () => y(e.id, e.type),
                      overwrite: e,
                      integration: k,
                      canShowMigrationTooltip: R,
                      hasAccessToMutatePermissions: u,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: L.dh,
              children: (0, i.jsx)(c.E, { color: "text-muted", variant: "text-sm/normal", children: o }),
          });
}
function M(e) {
    let t,
        {
            guild: n,
            commandId: s,
            onChange: a,
            onRemove: r,
            overwrite: c,
            integration: u,
            canShowMigrationTooltip: m,
            hasAccessToMutatePermissions: g,
        } = e,
        b = c.id === n.id || c.id === (0, p.Ap)(n.id),
        _ = u?.application?.bot?.username,
        j = !c.canWrite || !g,
        N = f.default.getId();
    g
        ? c.canWrite ||
          (c.type === x.RA.USER
              ? (t = c.id === N ? k.intl.string(k.t["1VF/0x"]) : k.intl.string(k.t.P1GnEd))
              : c.type === x.RA.ROLE && (t = k.intl.string(k.t.mcAijf)))
        : (t = null != s ? k.intl.string(k.t.tybdas) : k.intl.string(k.t["z2hjk/"]));
    let E = m && null != u && c.id === n.id && void 0 !== _ && !c.permission;
    l.useEffect(() => {
        E &&
            v.default.track(O.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, h.H$)(n.id),
                application_id: u?.application?.id,
                location: "toggle",
            });
    }, [n.id, u?.application?.id, E]);
    let C = l.useRef(null),
        I = (0, i.jsx)(d.m, {
            text: t,
            shouldShow: j,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: C,
                children: (0, i.jsx)(w.A, {
                    isDisabled: j,
                    currentValue: c.permission,
                    onChange: E
                        ? (e) => {
                              A.A.dismissToggleTooltip(n.id, u), a(e);
                          }
                        : a,
                }),
            }),
        }),
        T = (0, i.jsx)(o.A, {
            targetElementRef: C,
            title: k.intl.string(k.t.ufFDiC),
            body: k.intl.format(k.t.pW4Crz, {
                botName: _,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                A.A.dismissToggleTooltip(n.id, u);
            },
        });
    return (0, i.jsxs)(
        "div",
        {
            className: L.Wk,
            children: [
                (0, i.jsx)("div", {
                    className: L.MB,
                    children: (0, i.jsx)(y.A, { guild: n, id: c.id, type: c.type, isLocked: j, lockTooltipText: t }),
                }),
                (0, i.jsxs)("div", {
                    className: L.ev,
                    children: [(0, i.jsx)(D, { commandId: s, isSentinel: b, isDisabled: !g, onRemove: r }), I, E && T],
                }),
            ],
        },
        c.id,
    );
}
function D(e) {
    let { commandId: t, isSentinel: n, isDisabled: l, onRemove: s } = e;
    return l
        ? null
        : null == t && n
          ? null
          : (0, i.jsx)("div", {
                className: L.ys,
                children: (0, i.jsx)(u.D, {
                    className: L.od,
                    "aria-label": k.intl.string(k.t.mT0CQM),
                    onClick: s,
                    children: (0, i.jsx)(m.u, { size: "md", color: "currentColor", className: L.Yz }),
                }),
            });
}
