l.d(t, { A: () => _ });
var n = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    r = l(417597),
    o = l(565787),
    C = l(397927),
    d = l(530347),
    c = l(504049),
    u = l(266047),
    m = l(221950),
    x = l(652215),
    h = l(985018);
let g = (0, o.k)(d.A);
function _(e) {
    let { guildId: t, onClose: l } = e,
        s = (0, r.bG)([u.A], () => u.A.getSearchStateByGuildId(t), [t], a()),
        o = (0, c.Tj)(t),
        d = i.useCallback(() => {
            s.requireUnusualDmActivity || o(c.Zp.UNUSUAL_DM_ACTIVITY),
                (0, m.Ld)(t, { ...s, requireUnusualDmActivity: !s.requireUnusualDmActivity });
        }, [t, s, o]),
        _ = i.useCallback(() => {
            s.requireCommunicationDisabled || o(c.Zp.COMMUNICATION_DISABLED),
                (0, m.Ld)(t, { ...s, requireCommunicationDisabled: !s.requireCommunicationDisabled });
        }, [t, s, o]),
        H = i.useCallback(() => {
            s.requireUnusualAccountActivity || o(c.Zp.UNUSUAL_ACCOUNT_ACTIVITY),
                (0, m.Ld)(t, { ...s, requireUnusualAccountActivity: !s.requireUnusualAccountActivity });
        }, [t, s, o]),
        p = i.useCallback(() => {
            s.requireUsernameQuarantined || o(c.Zp.USERNAME_QUARANTINED),
                (0, m.Ld)(t, { ...s, requireUsernameQuarantined: !s.requireUsernameQuarantined });
        }, [t, s, o]);
    return (0, n.jsx)(C.W1t, {
        "data-menu-migrated": !0,
        navId: "member-safety-flags",
        onClose: l,
        "aria-label": h.intl.string(h.t.k9m8Rg),
        onSelect: x.tEg,
        children: (0, n.jsxs)(C.rXV, {
            children: [
                (0, n.jsx)(C.sLh, {
                    id: "toggle-require-unusual-dm-activity",
                    label: h.intl.string(h.t.ZRnON3),
                    leftIcon: C.EF8,
                    leadingAccessory: { type: "icon", icon: C.EF8 },
                    action: d,
                    checked: s.requireUnusualDmActivity,
                }),
                (0, n.jsx)(C.sLh, {
                    id: "toggle-require-communication-disabled",
                    label: h.intl.string(h.t.z3wbj8),
                    leftIcon: C.gQi,
                    leadingAccessory: { type: "icon", icon: C.gQi },
                    action: _,
                    checked: s.requireCommunicationDisabled,
                }),
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(C.sLh, {
                            id: "toggle-require-unusual-account-activity",
                            label: h.intl.string(h.t.DIQsD9),
                            leftIcon: g,
                            leadingAccessory: { type: "icon", icon: g },
                            action: H,
                            checked: s.requireUnusualAccountActivity,
                        }),
                        (0, n.jsx)(C.sLh, {
                            id: "toggle-require-username-quarantined",
                            label: h.intl.string(h.t.Jloklk),
                            leftIcon: C._mZ,
                            leadingAccessory: { type: "icon", icon: C._mZ },
                            action: p,
                            checked: s.requireUsernameQuarantined,
                        }),
                    ],
                }),
            ],
        }),
    });
}
