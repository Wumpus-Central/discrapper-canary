(n.d(t, { Z: () => N }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(755721),
    d = n(481060),
    u = n(668781),
    m = n(749210),
    g = n(190263),
    p = n(494620),
    f = n(496675),
    h = n(55935),
    x = n(63063),
    b = n(434404),
    j = n(714939),
    _ = n(494831),
    v = n(981631),
    O = n(231338),
    C = n(388032),
    y = n(587072);
function N(e) {
    let { guild: t, everyoneRole: n, filteredRoles: l, setEditRoleId: s, query: a, setQuery: o, setHeaderHeight: c } = e,
        u = i.useRef(null),
        m = g.D.useExperiment({
            guildId: t.id,
            location: 'GuildSettingsRolesOverviewHeader'
        }).enabled;
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : _.Cl);
    }, [c]);
    let p = i.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, r.jsxs)('div', {
        ref: u,
        children: [
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.H1,
                children: C.intl.string(C.t.LPJmLy)
            }),
            (0, r.jsx)(d.Text, {
                className: y.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: C.intl.string(C.t['1ydhVl'])
            }),
            m ? (0, r.jsx)(I, { guild: t }) : null,
            (0, r.jsx)(E, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: a,
                setQuery: o,
                onEveryoneRoleClick: p
            })
        ]
    });
}
function I(e) {
    let { guild: t } = e,
        n = (0, h.vc)(o()(v.LCk), 'LL'),
        i = t.features.has(v.oNc.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: 'text-sm/normal',
                  children: C.intl.format(C.t.Vg2oTE, { breakingChangeDate: n })
              })
            : f.Z.can(O.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: C.intl.format(C.t.HYM8OD, {
                        onClickMigrate: () => {
                            u.Z.show({
                                title: C.intl.string(C.t.nFE8dH),
                                body: C.intl.format(C.t['1PAzQ0'], { guildName: t.name }),
                                cancelText: C.intl.string(C.t['ETE/oK']),
                                confirmText: C.intl.string(C.t['cY+Ooa']),
                                onConfirm: () => {
                                    b.Z.migratePinPermission(t.id);
                                }
                            });
                        },
                        breakingChangeDate: n
                    })
                })
              : (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: C.intl.format(C.t.cAuU1d, { breakingChangeDate: n })
                });
    return (0, r.jsx)(p.Z, {
        look: p.z.WARNING,
        className: y.migrationInfoBox,
        children: i
    });
}
function E(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: a, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.Z, {
                role: n,
                onClick: o
            }),
            (0, r.jsx)(S, {
                guild: t,
                query: l,
                setQuery: a
            }),
            (0, r.jsx)(d.Text, {
                className: y.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: C.intl.format(C.t.xkC3YW, { articleURL: x.Z.getArticleURL(v.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, r.jsx)('div', {
                className: y.rolesTable,
                children: (0, r.jsxs)('div', {
                    className: y.tableHeader,
                    children: [
                        (0, r.jsx)('div', { className: y.dragSpacing }),
                        (0, r.jsx)(d.Text, {
                            className: s()(y.tableTitle, y.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: C.intl.format(C.t['38N3V1'], { numRoles: String(i.length) })
                        }),
                        (0, r.jsx)(d.Text, {
                            className: s()(y.tableTitle, y.memberSpacing),
                            variant: 'text-sm/normal',
                            children: C.intl.string(C.t['9Oq93t'])
                        }),
                        (0, r.jsx)('div', { className: y.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function S(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                l(e);
            },
            [l]
        ),
        u = i.useCallback(() => {
            l('');
        }, [l]),
        g = async () => {
            (a(!0), await m.Z.createRole(t.id), a(!1));
        };
    return (0, r.jsx)('div', {
        className: y.__invalid_rolesList,
        children: (0, r.jsxs)('div', {
            className: y.searchContainer,
            children: [
                (0, r.jsx)(d.E1j, {
                    size: d.E1j.Sizes.MEDIUM,
                    query: n,
                    onChange: o,
                    onClear: u,
                    placeholder: C.intl.string(C.t.Sojqsr),
                    'aria-label': C.intl.string(C.t.Sojqsr)
                }),
                (0, r.jsx)(c.zx, {
                    className: y.createButton,
                    size: c.zx.Sizes.SMALL,
                    onClick: g,
                    submitting: s,
                    children: C.intl.string(C.t.JZZjQE)
                })
            ]
        })
    });
}
