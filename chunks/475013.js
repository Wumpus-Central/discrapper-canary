n.d(t, {
    Z: () => N,
    _: () => E,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(796027),
    c = n(749210),
    d = n(493773),
    u = n(345162),
    g = n(650774),
    m = n(823379),
    p = n(434404),
    f = n(999382),
    h = n(84058),
    b = n(103576),
    x = n(130341),
    j = n(853813),
    v = n(163249),
    _ = n(150689),
    C = n(203377),
    O = n(981631);
function y(e) {
    p.Z.selectRole(e);
}
let E = () => {
    let { guild: e } = (0, s.cj)([f.Z], () => f.Z.getProps()),
        t = (0, s.e7)([b.Z], () => b.Z.formState),
        n = (0, s.e7)([b.Z], () => b.Z.errorMessage);
    return (0, r.jsx)(o.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = b.Z.editedRoleIds.map((e) => b.Z.getRole(e)).filter(m.lm),
                r = b.Z.getSortDeltas(),
                i = null,
                l = null;
            b.Z.hasRoleConfigurationChanges &&
                ((l = b.Z.editedRoleIdsForConfigurations), (i = b.Z.getEditedRoleConnectionConfigurationsMap())),
                (0, h.Gf)(t, n, r, l, i);
        },
        submitting: t === O.QZA.SUBMITTING,
        onReset: h.S1,
    });
};
function N(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, s.cj)(
            [b.Z],
            () => ({
                guild: b.Z.guild,
                roles: b.Z.roles,
            }),
            [],
        );
    a()(null != n, "Guild cannot be null here");
    let o = i.useMemo(() => l.find((e) => (0, u.fI)(e)), [l]);
    a()(null != o, "Guild must have an everyone role");
    let m = i.useMemo(() => l.filter((e) => !(0, u.fI)(e)), [l]),
        p = (0, s.e7)([f.Z], () => f.Z.getSelectedRoleId()),
        [h, O] = i.useState(m.length > 0);
    i.useEffect(() => {
        O(h || m.length > 0);
    }, [h, m.length]),
        (0, d.ZP)(() => {
            let e = g.Z.getMemberCount(n.id);
            null != e && e <= x.cm && c.Z.requestMembers(n.id, "", 0, !1);
        });
    let [E, N] = i.useState(C.ZI.DISPLAY);
    return (i.useEffect(() => {
        null == p && N(C.ZI.DISPLAY);
    }, [p]),
    null != p)
        ? (0, r.jsx)(j.Z, {
              editRoleId: p,
              setEditRoleId: y,
              selectedSection: E,
              setSelectedSection: N,
          })
        : h
          ? (0, r.jsx)(_.Z, {
                setEditRoleId: y,
                guild: n,
                everyoneRole: o,
                otherRoles: m,
                setSelectedSection: N,
                refToScroller: t,
            })
          : (0, r.jsx)(v.Z, {
                guild: n,
                everyoneRole: o,
                setEditRoleId: y,
            });
}
