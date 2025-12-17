n.d(t, {
    Z: () => I,
    _: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(442837),
    o = n(796027),
    c = n(749210),
    d = n(493773),
    u = n(345162),
    g = n(650774),
    f = n(823379),
    m = n(434404),
    b = n(999382),
    p = n(84058),
    h = n(103576),
    x = n(130341),
    j = n(853813),
    v = n(163249),
    O = n(150689),
    C = n(203377),
    y = n(981631);
function N(e) {
    m.Z.selectRole(e);
}
let E = () => {
    let { guild: e } = (0, s.cj)([b.Z], () => b.Z.getProps()),
        t = (0, s.e7)([h.Z], () => h.Z.formState),
        n = (0, s.e7)([h.Z], () => h.Z.errorMessage);
    return (0, r.jsx)(o.Z, {
        errorMessage: n,
        onSave: () => {
            if (null == e) return;
            let { id: t } = e,
                n = h.Z.editedRoleIds.map((e) => h.Z.getRole(e)).filter(f.lm),
                r = h.Z.getSortDeltas(),
                i = null,
                l = null;
            h.Z.hasRoleConfigurationChanges &&
                ((l = h.Z.editedRoleIdsForConfigurations), (i = h.Z.getEditedRoleConnectionConfigurationsMap())),
                (0, p.Gf)(t, n, r, l, i);
        },
        submitting: t === y.QZA.SUBMITTING,
        onReset: p.S1,
    });
};
function I(e) {
    let { refToScroller: t } = e,
        { guild: n, roles: l } = (0, s.cj)(
            [h.Z],
            () => ({
                guild: h.Z.guild,
                roles: h.Z.roles,
            }),
            [],
        );
    a()(null != n, "Guild cannot be null here");
    let o = i.useMemo(() => l.find((e) => (0, u.fI)(e)), [l]);
    a()(null != o, "Guild must have an everyone role");
    let f = i.useMemo(() => l.filter((e) => !(0, u.fI)(e)), [l]),
        m = (0, s.e7)([b.Z], () => b.Z.getSelectedRoleId()),
        [p, y] = i.useState(f.length > 0);
    i.useEffect(() => {
        y(p || f.length > 0);
    }, [p, f.length]),
        (0, d.ZP)(() => {
            let e = g.Z.getMemberCount(n.id);
            null != e && e <= x.cm && c.Z.requestMembers(n.id, "", 0, !1);
        });
    let [E, I] = i.useState(C.ZI.DISPLAY);
    return (i.useEffect(() => {
        null == m && I(C.ZI.DISPLAY);
    }, [m]),
    null != m)
        ? (0, r.jsx)(j.Z, {
              editRoleId: m,
              setEditRoleId: N,
              selectedSection: E,
              setSelectedSection: I,
          })
        : p
          ? (0, r.jsx)(O.Z, {
                setEditRoleId: N,
                guild: n,
                everyoneRole: o,
                otherRoles: f,
                setSelectedSection: I,
                refToScroller: t,
            })
          : (0, r.jsx)(v.Z, {
                guild: n,
                everyoneRole: o,
                setEditRoleId: N,
            });
}
