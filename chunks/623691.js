n.d(t, { Z: () => S }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(704215),
    d = n(481060),
    u = n(668781),
    g = n(749210),
    m = n(409513),
    p = n(266454),
    f = n(494620),
    h = n(496675),
    b = n(55935),
    x = n(63063),
    j = n(434404),
    _ = n(714939),
    v = n(569657),
    O = n(494831),
    C = n(981631),
    y = n(921944),
    N = n(231338),
    E = n(388032),
    I = n(297827);
function S(e) {
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
        { enabled: g } = m.Z.useExperiment({
            guildId: t.id,
            location: "GuildSettingsRolesOverviewHeader",
        });
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : O.Cl);
    }, [c]);
    let p = i.useCallback(() => {
            a(n.id);
        }, [a, n.id]),
        f = g ? v.Z : T;
    return (0, r.jsxs)("div", {
        ref: u,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: E.intl.string(E.t["LPJmL/"]),
            }),
            (0, r.jsx)(d.Text, {
                className: I.description,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: E.intl.string(E.t["1ydhVp"]),
            }),
            (0, r.jsx)(f, { guild: t }),
            (0, r.jsx)(P, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: s,
                setQuery: o,
                onEveryoneRoleClick: p,
            }),
        ],
    });
}
function T(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, p.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: y.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n = (0, b.vc)(o()(C.zQD), "LL"),
        l = t.features.has(C.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: E.intl.format(E.t.Vg2oTN, { breakingChangeDate: n }),
              })
            : h.Z.can(N.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: E.intl.format(E.t.HYM8OE, {
                        onClickMigrate: () => {
                            u.Z.show({
                                title: E.intl.string(E.t.nFE8dD),
                                body: E.intl.format(E.t["1PAzQ6"], { guildName: t.name }),
                                cancelText: E.intl.string(E.t["ETE/oC"]),
                                confirmText: E.intl.string(E.t["cY+Oob"]),
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
                    children: E.intl.format(E.t.cAuU1S, { breakingChangeDate: n }),
                });
    return (0, r.jsx)(f.Z, {
        look: f.z.WARNING,
        className: I.migrationInfoBox,
        children: l,
    });
}
function P(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: s, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Z, {
                role: n,
                onClick: o,
            }),
            (0, r.jsx)(w, {
                guild: t,
                query: l,
                setQuery: s,
            }),
            (0, r.jsx)(d.Text, {
                className: I.helpText,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: E.intl.format(E.t.xkC3Yf, { articleURL: x.Z.getArticleURL(C.BhN.PERMISSIONS_TUTORIAL) }),
            }),
            (0, r.jsx)("div", {
                className: I.rolesTable,
                children: (0, r.jsxs)("div", {
                    className: I.tableHeader,
                    children: [
                        (0, r.jsx)("div", { className: I.dragSpacing }),
                        (0, r.jsx)(d.Text, {
                            className: a()(I.tableTitle, I.roleNameSpacing),
                            variant: "text-sm/normal",
                            children: E.intl.format(E.t["38N3Vz"], { numRoles: String(i.length) }),
                        }),
                        (0, r.jsx)(d.Text, {
                            className: a()(I.tableTitle, I.memberSpacing),
                            variant: "text-sm/normal",
                            children: E.intl.string(E.t["9Oq93m"]),
                        }),
                        (0, r.jsx)("div", { className: I.buttonsSpacing }),
                    ],
                }),
            }),
        ],
    });
}
function w(e) {
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
            s(!0), await g.Z.createRole(t.id), s(!1);
        };
    return (0, r.jsx)("div", {
        className: I.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: I.searchContainer,
            children: [
                (0, r.jsx)(d.E1j, {
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: E.intl.string(E.t.Sojqsr),
                    "aria-label": E.intl.string(E.t.Sojqsr),
                }),
                (0, r.jsx)(d.Button, {
                    size: "sm",
                    onClick: u,
                    loading: a,
                    text: E.intl.string(E.t.JZZjQK),
                }),
            ],
        }),
    });
}
