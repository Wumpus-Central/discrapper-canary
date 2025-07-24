(n.d(t, { Z: () => S }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(704215),
    d = n(755721),
    u = n(481060),
    m = n(668781),
    g = n(749210),
    p = n(266454),
    f = n(190263),
    h = n(494620),
    x = n(496675),
    b = n(55935),
    j = n(63063),
    v = n(434404),
    _ = n(714939),
    O = n(494831),
    y = n(981631),
    C = n(921944),
    N = n(231338),
    I = n(388032),
    E = n(587072);
function S(e) {
    let { guild: t, everyoneRole: n, filteredRoles: l, setEditRoleId: s, query: a, setQuery: o, setHeaderHeight: c } = e,
        d = i.useRef(null),
        m = f.D.useExperiment({
            guildId: t.id,
            location: 'GuildSettingsRolesOverviewHeader'
        }).enabled;
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = d.current) ? void 0 : e.offsetHeight) ? t : O.Cl);
    }, [c]);
    let g = i.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, r.jsxs)('div', {
        ref: d,
        children: [
            (0, r.jsx)(u.vwX, {
                tag: u.RB0.H1,
                children: I.intl.string(I.t.LPJmLy)
            }),
            (0, r.jsx)(u.Text, {
                className: E.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: I.intl.string(I.t['1ydhVl'])
            }),
            m ? (0, r.jsx)(T, { guild: t }) : null,
            (0, r.jsx)(P, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: a,
                setQuery: o,
                onEveryoneRoleClick: g
            })
        ]
    });
}
function T(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, p.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: C.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0
        });
    }, [t]);
    let n = (0, b.vc)(o()(y.LCk), 'LL'),
        l = t.features.has(y.oNc.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(u.Text, {
                  variant: 'text-sm/normal',
                  children: I.intl.format(I.t.Vg2oTE, { breakingChangeDate: n })
              })
            : x.Z.can(N.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: I.intl.format(I.t.HYM8OD, {
                        onClickMigrate: () => {
                            m.Z.show({
                                title: I.intl.string(I.t.nFE8dH),
                                body: I.intl.format(I.t['1PAzQ0'], { guildName: t.name }),
                                cancelText: I.intl.string(I.t['ETE/oK']),
                                confirmText: I.intl.string(I.t['cY+Ooa']),
                                onConfirm: () => {
                                    v.Z.migratePinPermission(t.id);
                                }
                            });
                        },
                        breakingChangeDate: n
                    })
                })
              : (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: I.intl.format(I.t.cAuU1d, { breakingChangeDate: n })
                });
    return (0, r.jsx)(h.Z, {
        look: h.z.WARNING,
        className: E.migrationInfoBox,
        children: l
    });
}
function P(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: a, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Z, {
                role: n,
                onClick: o
            }),
            (0, r.jsx)(w, {
                guild: t,
                query: l,
                setQuery: a
            }),
            (0, r.jsx)(u.Text, {
                className: E.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: I.intl.format(I.t.xkC3YW, { articleURL: j.Z.getArticleURL(y.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, r.jsx)('div', {
                className: E.rolesTable,
                children: (0, r.jsxs)('div', {
                    className: E.tableHeader,
                    children: [
                        (0, r.jsx)('div', { className: E.dragSpacing }),
                        (0, r.jsx)(u.Text, {
                            className: s()(E.tableTitle, E.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: I.intl.format(I.t['38N3V1'], { numRoles: String(i.length) })
                        }),
                        (0, r.jsx)(u.Text, {
                            className: s()(E.tableTitle, E.memberSpacing),
                            variant: 'text-sm/normal',
                            children: I.intl.string(I.t['9Oq93t'])
                        }),
                        (0, r.jsx)('div', { className: E.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function w(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                l(e);
            },
            [l]
        ),
        c = i.useCallback(() => {
            l('');
        }, [l]),
        m = async () => {
            (a(!0), await g.Z.createRole(t.id), a(!1));
        };
    return (0, r.jsx)('div', {
        className: E.__invalid_rolesList,
        children: (0, r.jsxs)('div', {
            className: E.searchContainer,
            children: [
                (0, r.jsx)(u.E1j, {
                    size: u.E1j.Sizes.MEDIUM,
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: I.intl.string(I.t.Sojqsr),
                    'aria-label': I.intl.string(I.t.Sojqsr)
                }),
                (0, r.jsx)(d.zx, {
                    className: E.createButton,
                    size: d.zx.Sizes.SMALL,
                    onClick: m,
                    submitting: s,
                    children: I.intl.string(I.t.JZZjQE)
                })
            ]
        })
    });
}
