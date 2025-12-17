n.d(t, { Z: () => _ }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(913527),
    o = n.n(s),
    c = n(704215),
    d = n(481060),
    u = n(668781),
    g = n(749210),
    f = n(409513),
    m = n(266454),
    b = n(494620),
    p = n(496675),
    h = n(55935),
    x = n(63063),
    j = n(434404),
    v = n(714939),
    O = n(569657),
    C = n(494831),
    y = n(981631),
    N = n(921944),
    E = n(231338),
    I = n(388032),
    S = n(499899);
function _(e) {
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
        { enabled: g } = f.Z.useExperiment({
            guildId: t.id,
            location: "GuildSettingsRolesOverviewHeader",
        });
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : C.Cl);
    }, [c]);
    let m = i.useCallback(() => {
            a(n.id);
        }, [a, n.id]),
        b = g ? O.Z : T;
    return (0, r.jsxs)("div", {
        ref: u,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: I.intl.string(I.t["LPJmL/"]),
            }),
            (0, r.jsx)(d.Text, {
                className: S.description,
                color: "text-default",
                variant: "text-sm/normal",
                children: I.intl.string(I.t["1ydhVp"]),
            }),
            (0, r.jsx)(b, { guild: t }),
            (0, r.jsx)(P, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: s,
                setQuery: o,
                onEveryoneRoleClick: m,
            }),
        ],
    });
}
function T(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, m.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: N.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n = (0, h.vc)(o()(y.zQD), "LL"),
        l = t.features.has(y.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: I.intl.format(I.t.Vg2oTN, { breakingChangeDate: n }),
              })
            : p.Z.can(E.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: I.intl.format(I.t.HYM8OE, {
                        onClickMigrate: () => {
                            u.Z.show({
                                title: I.intl.string(I.t.nFE8dD),
                                body: I.intl.format(I.t["1PAzQ6"], { guildName: t.name }),
                                cancelText: I.intl.string(I.t["ETE/oC"]),
                                confirmText: I.intl.string(I.t["cY+Oob"]),
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
                    children: I.intl.format(I.t.cAuU1S, { breakingChangeDate: n }),
                });
    return (0, r.jsx)(b.Z, {
        look: b.z.WARNING,
        className: S.migrationInfoBox,
        children: l,
    });
}
function P(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: s, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.Z, {
                role: n,
                onClick: o,
            }),
            (0, r.jsx)(w, {
                guild: t,
                query: l,
                setQuery: s,
            }),
            (0, r.jsx)(d.Text, {
                className: S.helpText,
                color: "text-default",
                variant: "text-sm/normal",
                children: I.intl.format(I.t.xkC3Yf, { articleURL: x.Z.getArticleURL(y.BhN.PERMISSIONS_TUTORIAL) }),
            }),
            (0, r.jsx)("div", {
                className: S.rolesTable,
                children: (0, r.jsxs)("div", {
                    className: S.tableHeader,
                    children: [
                        (0, r.jsx)("div", { className: S.dragSpacing }),
                        (0, r.jsx)(d.Text, {
                            className: a()(S.tableTitle, S.roleNameSpacing),
                            variant: "text-sm/normal",
                            children: I.intl.format(I.t["38N3Vz"], { numRoles: String(i.length) }),
                        }),
                        (0, r.jsx)(d.Text, {
                            className: a()(S.tableTitle, S.memberSpacing),
                            variant: "text-sm/normal",
                            children: I.intl.string(I.t["9Oq93m"]),
                        }),
                        (0, r.jsx)("div", { className: S.buttonsSpacing }),
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
        className: S.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: S.searchContainer,
            children: [
                (0, r.jsx)(d.E1j, {
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: I.intl.string(I.t.Sojqsr),
                    "aria-label": I.intl.string(I.t.Sojqsr),
                }),
                (0, r.jsx)(d.Button, {
                    size: "sm",
                    onClick: u,
                    loading: a,
                    text: I.intl.string(I.t.JZZjQK),
                }),
            ],
        }),
    });
}
