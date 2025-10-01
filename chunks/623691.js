n.d(t, { Z: () => E }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(913527),
    o = n.n(a),
    c = n(704215),
    d = n(481060),
    u = n(668781),
    m = n(749210),
    g = n(266454),
    p = n(494620),
    f = n(496675),
    h = n(55935),
    x = n(63063),
    b = n(434404),
    j = n(714939),
    v = n(494831),
    _ = n(981631),
    O = n(921944),
    y = n(231338),
    C = n(388032),
    N = n(804306);
function E(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: s,
            query: a,
            setQuery: o,
            setHeaderHeight: c,
        } = e,
        u = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        c(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : v.Cl);
    }, [c]);
    let m = i.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, r.jsxs)("div", {
        ref: u,
        children: [
            (0, r.jsx)(d.vwX, {
                tag: d.RB0.H1,
                children: C.intl.string(C.t.LPJmLy),
            }),
            (0, r.jsx)(d.Text, {
                className: N.description,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: C.intl.string(C.t["1ydhVl"]),
            }),
            (0, r.jsx)(I, { guild: t }),
            (0, r.jsx)(S, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: a,
                setQuery: o,
                onEveryoneRoleClick: m,
            }),
        ],
    });
}
function I(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, g.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: O.L.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n = (0, h.vc)(o()(_.zQD), "LL"),
        l = t.features.has(_.oNc.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: C.intl.format(C.t.Vg2oTE, { breakingChangeDate: n }),
              })
            : f.Z.can(y.Pl.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t.HYM8OD, {
                        onClickMigrate: () => {
                            u.Z.show({
                                title: C.intl.string(C.t.nFE8dH),
                                body: C.intl.format(C.t["1PAzQ0"], { guildName: t.name }),
                                cancelText: C.intl.string(C.t["ETE/oK"]),
                                confirmText: C.intl.string(C.t["cY+Ooa"]),
                                onConfirm: () => {
                                    b.Z.migratePinPermission(t.id);
                                },
                            });
                        },
                        breakingChangeDate: n,
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t.cAuU1d, { breakingChangeDate: n }),
                });
    return (0, r.jsx)(p.Z, {
        look: p.z.WARNING,
        className: N.migrationInfoBox,
        children: l,
    });
}
function S(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: a, onEveryoneRoleClick: o } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.Z, {
                role: n,
                onClick: o,
            }),
            (0, r.jsx)(T, {
                guild: t,
                query: l,
                setQuery: a,
            }),
            (0, r.jsx)(d.Text, {
                className: N.helpText,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: C.intl.format(C.t.xkC3YW, { articleURL: x.Z.getArticleURL(_.BhN.PERMISSIONS_TUTORIAL) }),
            }),
            (0, r.jsx)("div", {
                className: N.rolesTable,
                children: (0, r.jsxs)("div", {
                    className: N.tableHeader,
                    children: [
                        (0, r.jsx)("div", { className: N.dragSpacing }),
                        (0, r.jsx)(d.Text, {
                            className: s()(N.tableTitle, N.roleNameSpacing),
                            variant: "text-sm/normal",
                            children: C.intl.format(C.t["38N3V1"], { numRoles: String(i.length) }),
                        }),
                        (0, r.jsx)(d.Text, {
                            className: s()(N.tableTitle, N.memberSpacing),
                            variant: "text-sm/normal",
                            children: C.intl.string(C.t["9Oq93t"]),
                        }),
                        (0, r.jsx)("div", { className: N.buttonsSpacing }),
                    ],
                }),
            }),
        ],
    });
}
function T(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, a] = i.useState(!1),
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
            a(!0), await m.Z.createRole(t.id), a(!1);
        };
    return (0, r.jsx)("div", {
        className: N.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: N.searchContainer,
            children: [
                (0, r.jsx)(d.E1j, {
                    query: n,
                    onChange: o,
                    onClear: c,
                    placeholder: C.intl.string(C.t.Sojqsr),
                    "aria-label": C.intl.string(C.t.Sojqsr),
                }),
                (0, r.jsx)(d.zxk, {
                    size: "sm",
                    onClick: u,
                    loading: s,
                    text: C.intl.string(C.t.JZZjQE),
                }),
            ],
        }),
    });
}
