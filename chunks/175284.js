n.d(t, { A: () => T }), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    c = n.n(a),
    o = n(554146),
    d = n(397927),
    u = n(157559),
    f = n(686956),
    g = n(386849),
    b = n(826673),
    m = n(801264),
    p = n(576705),
    x = n(405269),
    h = n(975571),
    j = n(997509),
    O = n(50249),
    y = n(305053),
    v = n(512031),
    A = n(652215),
    E = n(49999),
    N = n(818348),
    _ = n(985018),
    S = n(107550);
function T(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: s,
            query: a,
            setQuery: c,
            setHeaderHeight: o,
        } = e,
        u = i.useRef(null),
        { enabled: f } = g.A.useExperiment({
            guildId: t.id,
            location: "GuildSettingsRolesOverviewHeader",
        });
    i.useEffect(() => {
        var e, t;
        o(null != (e = null == (t = u.current) ? void 0 : t.offsetHeight) ? e : v.p4);
    }, [o]);
    let b = i.useCallback(() => {
            s(n.id);
        }, [s, n.id]),
        m = f ? y.A : I;
    return (0, r.jsxs)("div", {
        ref: u,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: _.intl.string(_.t["LPJmL/"]),
            }),
            (0, r.jsx)(d.Text, {
                className: S.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.string(_.t["1ydhVp"]),
            }),
            (0, r.jsx)(m, { guild: t }),
            (0, r.jsx)(C, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: a,
                setQuery: c,
                onEveryoneRoleClick: b,
            }),
        ],
    });
}
function I(e) {
    let { guild: t } = e;
    i.useEffect(() => {
        (0, b.dX)(o.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: E.i.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0,
        });
    }, [t]);
    let n = (0, x.i$)(c()(A.X30), "LL"),
        l = t.features.has(A.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)
            ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  children: _.intl.format(_.t.Vg2oTN, { breakingChangeDate: n }),
              })
            : p.A.can(N.xB.ADMINISTRATOR, t)
              ? (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: _.intl.format(_.t.HYM8OE, {
                        onClickMigrate: () => {
                            u.A.show({
                                title: _.intl.string(_.t.nFE8dD),
                                body: _.intl.format(_.t["1PAzQ6"], { guildName: t.name }),
                                cancelText: _.intl.string(_.t["ETE/oC"]),
                                confirmText: _.intl.string(_.t["cY+Oob"]),
                                onConfirm: () => {
                                    j.A.migratePinPermission(t.id);
                                },
                            });
                        },
                        breakingChangeDate: n,
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: _.intl.format(_.t.cAuU1S, { breakingChangeDate: n }),
                });
    return (0, r.jsx)(m.A, {
        look: m.k.WARNING,
        className: S.q4,
        children: l,
    });
}
function C(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: a, onEveryoneRoleClick: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.A, {
                role: n,
                onClick: c,
            }),
            (0, r.jsx)(P, {
                guild: t,
                query: l,
                setQuery: a,
            }),
            (0, r.jsx)(d.Text, {
                className: S.BK,
                color: "text-default",
                variant: "text-sm/normal",
                children: _.intl.format(_.t.xkC3Yf, { articleURL: h.A.getArticleURL(A.MVz.PERMISSIONS_TUTORIAL) }),
            }),
            (0, r.jsx)("div", {
                className: S.kA,
                children: (0, r.jsxs)("div", {
                    className: S.qd,
                    children: [
                        (0, r.jsx)("div", { className: S._M }),
                        (0, r.jsx)(d.Text, {
                            className: s()(S.jA, S.N5),
                            variant: "text-sm/normal",
                            children: _.intl.format(_.t["38N3Vz"], { numRoles: String(i.length) }),
                        }),
                        (0, r.jsx)(d.Text, {
                            className: s()(S.jA, S.Hp),
                            variant: "text-sm/normal",
                            children: _.intl.string(_.t["9Oq93m"]),
                        }),
                        (0, r.jsx)("div", { className: S.DE }),
                    ],
                }),
            }),
        ],
    });
}
function P(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, a] = i.useState(!1),
        c = i.useCallback(
            (e) => {
                l(e);
            },
            [l],
        ),
        o = i.useCallback(() => {
            l("");
        }, [l]),
        u = async () => {
            a(!0), await f.A.createRole(t.id), a(!1);
        };
    return (0, r.jsx)("div", {
        className: S.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: S.MT,
            children: [
                (0, r.jsx)(d.IWV, {
                    query: n,
                    onChange: c,
                    onClear: o,
                    placeholder: _.intl.string(_.t.Sojqsr),
                    "aria-label": _.intl.string(_.t.Sojqsr),
                }),
                (0, r.jsx)(d.Button, {
                    size: "sm",
                    onClick: u,
                    loading: s,
                    text: _.intl.string(_.t.JZZjQK),
                }),
            ],
        }),
    });
}
