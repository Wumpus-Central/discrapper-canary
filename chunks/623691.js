n.d(t, { Z: () => I }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(704215),
    d = n(481060),
    u = n(668781),
    m = n(749210),
    g = n(266454),
    p = n(190263),
    h = n(494620),
    f = n(496675),
    b = n(55935),
    x = n(63063),
    j = n(434404),
    v = n(714939),
    _ = n(494831),
    O = n(981631),
    y = n(921944),
    C = n(231338),
    N = n(388032),
    E = n(297827);
function I(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: a,
            query: s,
            setQuery: o,
            setHeaderHeight: c,
        } = e,
        u = i.useRef(null),
        m = p.D.useExperiment({
            guildId: t.id,
            location: "GuildSettingsRolesOverviewHeader",
        }).enabled;
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : _.Cl);
    }, [c]);
    let g = i.useCallback(() => {
        a(n.id);
    }, [a, n.id]);
    return (0, r.jsxs)("div", {
        ref: u,
        children: [
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.H1,
                children: N.intl.string(N.t.LPJmLy),
            }),
            (0, r.jsx)(d.Text, {
                className: E.description,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: N.intl.string(N.t["1ydhVl"]),
            }),
            m ? (0, r.jsx)(S, { guild: t }) : null,
            (0, r.jsx)(T, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: s,
                setQuery: o,
                onEveryoneRoleClick: g,
            }),
        ],
    });
}
function S(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, g.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: y.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n = (0, b.vc)(o()(O.LCk), "LL"),
        l = t.features.has(O.oNc.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: N.intl.format(N.t.Vg2oTE, { breakingChangeDate: n }),
              })
            : f.Z.can(C.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: N.intl.format(N.t.HYM8OD, {
                        onClickMigrate: () => {
                            u.Z.show({
                                title: N.intl.string(N.t.nFE8dH),
                                body: N.intl.format(N.t["1PAzQ0"], { guildName: t.name }),
                                cancelText: N.intl.string(N.t["ETE/oK"]),
                                confirmText: N.intl.string(N.t["cY+Ooa"]),
                                onConfirm: () => {
                                    j.Z.migratePinPermission(t.id);
                                },
                            });
                        },
                        breakingChangeDate: n,
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: N.intl.format(N.t.cAuU1d, { breakingChangeDate: n }),
                });
    return (0, r.jsx)(h.Z, {
        look: h.z.WARNING,
        className: E.migrationInfoBox,
        children: l,
    });
}
function T(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: s, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.Z, {
                role: n,
                onClick: o,
            }),
            (0, r.jsx)(P, {
                guild: t,
                query: l,
                setQuery: s,
            }),
            (0, r.jsx)(d.Text, {
                className: E.helpText,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: N.intl.format(N.t.xkC3YW, { articleURL: x.Z.getArticleURL(O.BhN.PERMISSIONS_TUTORIAL) }),
            }),
            (0, r.jsx)("div", {
                className: E.rolesTable,
                children: (0, r.jsxs)("div", {
                    className: E.tableHeader,
                    children: [
                        (0, r.jsx)("div", { className: E.dragSpacing }),
                        (0, r.jsx)(d.Text, {
                            className: a()(E.tableTitle, E.roleNameSpacing),
                            variant: "text-sm/normal",
                            children: N.intl.format(N.t["38N3V1"], { numRoles: String(i.length) }),
                        }),
                        (0, r.jsx)(d.Text, {
                            className: a()(E.tableTitle, E.memberSpacing),
                            variant: "text-sm/normal",
                            children: N.intl.string(N.t["9Oq93t"]),
                        }),
                        (0, r.jsx)("div", { className: E.buttonsSpacing }),
                    ],
                }),
            }),
        ],
    });
}
function P(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [a, s] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                l(e);
            },
            [l],
        ),
        c = i.useCallback(() => {
            l("");
        }, [l]),
        u = async () => {
            s(!0), await m.Z.createRole(t.id), s(!1);
        };
    return (0, r.jsx)("div", {
        className: E.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: E.searchContainer,
            children: [
                (0, r.jsx)(d.E1j, {
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: N.intl.string(N.t.Sojqsr),
                    "aria-label": N.intl.string(N.t.Sojqsr),
                }),
                (0, r.jsx)(d.zxk, {
                    size: "sm",
                    onClick: u,
                    loading: a,
                    text: N.intl.string(N.t.JZZjQE),
                }),
            ],
        }),
    });
}
