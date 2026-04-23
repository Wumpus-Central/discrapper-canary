l.d(t, { A: () => j });
var n = l(627968),
    i = l(64700),
    a = l(33851),
    s = l.n(a),
    C = l(417597),
    r = l(565787),
    o = l(861672),
    d = l(477782),
    c = l(953822),
    u = l(60270),
    m = l(353182),
    h = l(530347),
    x = l(504049),
    g = l(266047),
    H = l(221950),
    _ = l(652215),
    p = l(985018);
let f = (0, r.k)(h.A);
function j(e) {
    let { guildId: t, onClose: l } = e,
        a = (0, C.bG)([g.A], () => g.A.getSearchStateByGuildId(t), [t], s()),
        r = (0, x.Tj)(t),
        h = i.useCallback(() => {
            a.requireUnusualDmActivity || r(x.Zp.UNUSUAL_DM_ACTIVITY),
                (0, H.Ld)(t, { ...a, requireUnusualDmActivity: !a.requireUnusualDmActivity });
        }, [t, a, r]),
        j = i.useCallback(() => {
            a.requireCommunicationDisabled || r(x.Zp.COMMUNICATION_DISABLED),
                (0, H.Ld)(t, { ...a, requireCommunicationDisabled: !a.requireCommunicationDisabled });
        }, [t, a, r]),
        b = i.useCallback(() => {
            a.requireUnusualAccountActivity || r(x.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, H.Ld)(t, { ...a, requireUnusualAccountActivity: !a.requireUnusualAccountActivity });
        }, [t, a, r]),
        A = i.useCallback(() => {
            a.requireUsernameQuarantined || r(x.Zp.USERNAME_QUARANTINED),
                (0, H.Ld)(t, { ...a, requireUsernameQuarantined: !a.requireUsernameQuarantined });
        }, [t, a, r]);
    return (0, n.jsx)(o.W, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": p.intl.string(p.t.k9m8Rg),
        onSelect: _.tEg,
        children: (0, n.jsxs)(d.rX, {
            children: [
                (0, n.jsx)(d.sL, {
                    id: "toggle-require-unusual-dm-activity",
                    label: p.intl.string(p.t.ZRnON3),
                    leftIcon: c.E,
                    leadingAccessory: { type: "icon", icon: c.E },
                    action: h,
                    checked: a.requireUnusualDmActivity,
                }),
                (0, n.jsx)(d.sL, {
                    id: "toggle-require-communication-disabled",
                    label: p.intl.string(p.t.z3wbj8),
                    leftIcon: u.g,
                    leadingAccessory: { type: "icon", icon: u.g },
                    action: j,
                    checked: a.requireCommunicationDisabled,
                }),
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(d.sL, {
                            id: "toggle-require-unusual-account-activity",
                            label: p.intl.string(p.t.DIQsD9),
                            leftIcon: f,
                            leadingAccessory: { type: "icon", icon: f },
                            action: b,
                            checked: a.requireUnusualAccountActivity,
                        }),
                        (0, n.jsx)(d.sL, {
                            id: "toggle-require-username-quarantined",
                            label: p.intl.string(p.t.Jloklk),
                            leftIcon: m._,
                            leadingAccessory: { type: "icon", icon: m._ },
                            action: A,
                            checked: a.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
