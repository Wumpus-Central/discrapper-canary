n.d(t, { Z: () => N }), n(953529), n(388685);
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
    m = n(266454),
    p = n(494620),
    f = n(496675),
    h = n(55935),
    b = n(63063),
    x = n(434404),
    j = n(714939),
    v = n(494831),
    _ = n(981631),
    C = n(921944),
    O = n(231338),
    y = n(388032),
    E = n(297827);
function N(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: a,
            query: s,
            setQuery: o,
            setHeaderHeight: c,
        } = e,
        u = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : v.Cl);
    }, [c]);
    let g = i.useCallback(() => {
        a(n.id);
    }, [a, n.id]);
    return (0, r.jsxs)("div", {
        ref: u,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: y.intl.string(y.t["LPJmL/"]),
            }),
            (0, r.jsx)(d.Text, {
                className: E.description,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: y.intl.string(y.t["1ydhVp"]),
            }),
            (0, r.jsx)(I, { guild: t }),
            (0, r.jsx)(S, {
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
function I(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, m.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: C.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n = (0, h.vc)(o()(_.zQD), "LL"),
        l = t.features.has(_.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: y.intl.format(y.t.Vg2oTN, { breakingChangeDate: n }),
              })
            : f.Z.can(O.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.HYM8OE, {
                        onClickMigrate: () => {
                            u.Z.show({
                                title: y.intl.string(y.t.nFE8dD),
                                body: y.intl.format(y.t["1PAzQ6"], { guildName: t.name }),
                                cancelText: y.intl.string(y.t["ETE/oC"]),
                                confirmText: y.intl.string(y.t["cY+Oob"]),
                                onConfirm: () => {
                                    x.Z.migratePinPermission(t.id);
                                },
                            });
                        },
                        breakingChangeDate: n,
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.cAuU1S, { breakingChangeDate: n }),
                });
    return (0, r.jsx)(p.Z, {
        look: p.z.WARNING,
        className: E.migrationInfoBox,
        children: l,
    });
}
function S(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: s, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.Z, {
                role: n,
                onClick: o,
            }),
            (0, r.jsx)(T, {
                guild: t,
                query: l,
                setQuery: s,
            }),
            (0, r.jsx)(d.Text, {
                className: E.helpText,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: y.intl.format(y.t.xkC3Yf, { articleURL: b.Z.getArticleURL(_.BhN.PERMISSIONS_TUTORIAL) }),
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
                            children: y.intl.format(y.t["38N3Vz"], { numRoles: String(i.length) }),
                        }),
                        (0, r.jsx)(d.Text, {
                            className: a()(E.tableTitle, E.memberSpacing),
                            variant: "text-sm/normal",
                            children: y.intl.string(y.t["9Oq93m"]),
                        }),
                        (0, r.jsx)("div", { className: E.buttonsSpacing }),
                    ],
                }),
            }),
        ],
    });
}
function T(e) {
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
        className: E.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: E.searchContainer,
            children: [
                (0, r.jsx)(d.E1j, {
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: y.intl.string(y.t.Sojqsr),
                    "aria-label": y.intl.string(y.t.Sojqsr),
                }),
                (0, r.jsx)(d.Button, {
                    size: "sm",
                    onClick: u,
                    loading: a,
                    text: y.intl.string(y.t.JZZjQK),
                }),
            ],
        }),
    });
}
