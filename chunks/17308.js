n.d(t, { A: () => A });
var i = n(627968),
    s = n(766928),
    l = n(311907),
    a = n(793574),
    r = n(754333),
    o = n(287809),
    d = n(780964),
    u = n(858897),
    c = n(765500),
    g = n(869965),
    m = n(985018);
function _() {
    return (0, i.jsx)(c.x, {
        icon: s.W,
        label: m.intl.string(m.t.iUa0sn),
        description: m.intl.format(m.t["044+8i"], {
            onClick: () =>
                (0, u.openUserSettings)(d.X.ACCOUNT_PANEL, { analyticsLocations: [a.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function A() {
    let { otherSessions: e } = (0, r.r)(),
        t = (0, l.bG)([o.default], () => o.default.getCurrentUser());
    return (0, i.jsxs)(g.d, {
        title: m.intl.string(m.t.xx1MWc),
        children: [e.map((e) => (0, i.jsx)(c.N, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, i.jsx)(_, {})],
    });
}
