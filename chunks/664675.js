n.d(t, { A: () => R }), n(172879);
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(311907),
    o = n(342494),
    d = n(990078),
    c = n(397927),
    u = n(686956),
    m = n(58149),
    g = n(392054),
    x = n(168186),
    h = n(320426),
    p = n(381616),
    A = n(961350),
    b = n(317525),
    _ = n(71393),
    f = n(287809),
    N = n(954571),
    j = n(562153),
    T = n(661191),
    C = n(53656),
    v = n(803378),
    E = n(200662),
    I = n(739174),
    S = n(738431),
    y = n(652215),
    O = n(985018),
    w = n(809719);
function R(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: s,
            noneSelectedText: o,
            overwrites: d,
            hasAccessToMutatePermissions: m,
        } = e,
        h = (0, r.bG)([_.A], () => _.A.getGuild(s));
    a()(null != h, "");
    let A = (0, r.bG)([b.A], () => b.A.getSortedRoles(s)),
        [N, I] = l.useState(new Set()),
        S = l.useMemo(() => {
            let e = (0, x.Ap)(s),
                t = A.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(d)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let l = n.type - i.type;
                    if (0 !== l) return l;
                    switch (n.type) {
                        case g.RA.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let l = f.default.getUser(e.id),
                                    s = f.default.getUser(t.id);
                                if (null != l && null != s) {
                                    let e = j.Ay.getName(n, void 0, l),
                                        t = j.Ay.getName(n, void 0, s);
                                    return e?.localeCompare(t);
                                }
                                return T.default.compare(e.id, t.id);
                            })(n, i, s);
                        case g.RA.ROLE:
                            if (n.id === s) return -1;
                            if (i.id === s) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case g.RA.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let a = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== a ? a : T.default.compare(n.id, i.id);
                    }
                });
        }, [s, d, A]),
        y = l.useCallback(
            (e, t) => {
                n({}, [(0, E.Eu)(e, t)]);
            },
            [n],
        ),
        O = l.useCallback(
            (e, t, i) => {
                let l = (0, E.Eu)(e, t);
                null != d[l] && n({ [l]: { id: e, permission: i, type: t } }, []);
            },
            [n, d],
        );
    l.useEffect(() => {
        let e = Object.values(d)
            .filter((e) => e.type === g.RA.USER && !e.canRead && !N.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.A.requestMembersById(s, e, !1), I((t) => new Set([...t, ...e])));
    }, [s, d, N, I]);
    let R = (0, r.bG)([v.A], () => v.A.getApplicationId()),
        L = (0, r.bG)([C.default], () =>
            null == R ? void 0 : C.default.integrations.find((e) => e.application?.id === R),
        ),
        M = (0, r.bG)([p.A], () => void 0 !== L && p.A.canShowToggleTooltip(L.id));
    return S.length > 0
        ? S.map((e) =>
              (0, i.jsx)(
                  k,
                  {
                      guild: h,
                      commandId: t,
                      onChange: (t) => O(e.id, e.type, t),
                      onRemove: () => y(e.id, e.type),
                      overwrite: e,
                      integration: L,
                      canShowMigrationTooltip: M,
                      hasAccessToMutatePermissions: m,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: w.dh,
              children: (0, i.jsx)(c.Text, { color: "text-muted", variant: "text-sm/normal", children: o }),
          });
}
function k(e) {
    let t,
        {
            guild: n,
            commandId: s,
            onChange: a,
            onRemove: r,
            overwrite: c,
            integration: u,
            canShowMigrationTooltip: p,
            hasAccessToMutatePermissions: b,
        } = e,
        _ = c.id === n.id || c.id === (0, x.Ap)(n.id),
        f = u?.application?.bot?.username,
        j = !c.canWrite || !b,
        T = A.default.getId();
    b
        ? c.canWrite ||
          (c.type === g.RA.USER
              ? (t = c.id === T ? O.intl.string(O.t["1VF/0x"]) : O.intl.string(O.t.P1GnEd))
              : c.type === g.RA.ROLE && (t = O.intl.string(O.t.mcAijf)))
        : (t = null != s ? O.intl.string(O.t.tybdas) : O.intl.string(O.t["z2hjk/"]));
    let C = p && null != u && c.id === n.id && void 0 !== f && !c.permission;
    l.useEffect(() => {
        C &&
            N.default.track(y.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, m.H$)(n.id),
                application_id: u?.application?.id,
                location: "toggle",
            });
    }, [n.id, u?.application?.id, C]);
    let v = l.useRef(null),
        E = (0, i.jsx)(d.m, {
            text: t,
            shouldShow: j,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: v,
                children: (0, i.jsx)(S.A, {
                    isDisabled: j,
                    currentValue: c.permission,
                    onChange: C
                        ? (e) => {
                              h.A.dismissToggleTooltip(n.id, u), a(e);
                          }
                        : a,
                }),
            }),
        }),
        R = (0, i.jsx)(o.AM, {
            targetElementRef: v,
            title: O.intl.string(O.t.ufFDiC),
            body: O.intl.format(O.t.pW4Crz, {
                botName: f,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                h.A.dismissToggleTooltip(n.id, u);
            },
        });
    return (0, i.jsxs)(
        "div",
        {
            className: w.Wk,
            children: [
                (0, i.jsx)("div", {
                    className: w.MB,
                    children: (0, i.jsx)(I.A, { guild: n, id: c.id, type: c.type, isLocked: j, lockTooltipText: t }),
                }),
                (0, i.jsxs)("div", {
                    className: w.ev,
                    children: [(0, i.jsx)(L, { commandId: s, isSentinel: _, isDisabled: !b, onRemove: r }), E, C && R],
                }),
            ],
        },
        c.id,
    );
}
function L(e) {
    let { commandId: t, isSentinel: n, isDisabled: l, onRemove: s } = e;
    return l
        ? null
        : null == t && n
          ? null
          : (0, i.jsx)("div", {
                className: w.ys,
                children: (0, i.jsx)(c.DUT, {
                    className: w.od,
                    "aria-label": O.intl.string(O.t.mT0CQM),
                    onClick: s,
                    children: (0, i.jsx)(c.ucK, { size: "md", color: "currentColor", className: w.Yz }),
                }),
            });
}
