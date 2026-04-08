n.d(t, { A: () => x });
var i = n(627968),
    s = n(158954),
    l = n(311907),
    a = n(793574),
    r = n(754333),
    o = n(287809),
    d = n(780964),
    c = n(858897),
    u = n(765500),
    m = n(869965),
    g = n(985018);
function _() {
    return (0, i.jsx)(u.x, {
        icon: s.WZu,
        label: g.intl.string(g.t.iUa0sn),
        description: g.intl.format(g.t["044+8i"], {
            onClick: () =>
                (0, c.openUserSettings)(d.X.ACCOUNT_PANEL, { analyticsLocations: [a.A.USER_SETTINGS_SESSIONS] }),
        }),
        muted: !0,
    });
}
function x() {
    let { otherSessions: e } = (0, r.r)(),
        t = (0, l.bG)([o.default], () => o.default.getCurrentUser());
    return (0, i.jsxs)(m.d, {
        title: g.intl.string(g.t.xx1MWc),
        children: [e.map((e) => (0, i.jsx)(u.N, { session: e }, e.id_hash)), t?.mfaEnabled ? null : (0, i.jsx)(_, {})],
    });
}
